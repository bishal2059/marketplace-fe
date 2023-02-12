import { ShoppingCart } from "@mui/icons-material";
import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import { Backdrop, Alert } from "@mui/material";
import { removeFromCart } from "../../hooks/cartHandle";
import ImgSlider from "./ImgSlider";
import classes from "./ProductCard.module.css";
import StripeCheckout from "react-stripe-checkout";
import paymentHandler from "../../hooks/paymentHandle";

function ProductCard(props) {
  const [error, seterror] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = (e) => {
    setOpen(!open);
  };
  const [open2, setOpen2] = useState(false);
  const handleClose2 = async () => {
    setOpen2(false);
    await removeItemFromCart();
  };
  const handleToggle2 = (e) => {
    setOpen2(!open2);
  };
  const [open3, setOpen3] = useState(false);
  const handleClose3 = async () => {
    setOpen3(false);
  };
  const handleToggle3 = (e) => {
    setOpen3(!open3);
  };

  const [cart, setcart] = useState(props.cart);

  const makePayment = async function (token) {
    const response = await paymentHandler(token, props.id);
    if (response?.clientError) {
      return console.error(response.clientError);
    }
    if (response?.error) {
      handleToggle3();
      return console.error(response.error);
    }
    if (response?.success === "Payment Successful") {
      console.log("Success");
      handleToggle2();
    }
  };
  const removeItemFromCart = async function () {
    const response = await removeFromCart(props.id);
    if (response?.unverified === true) {
      seterror(response?.message);
      handleToggle();
    }
    if (response?.clientError) {
      console.error(response.clientError);
      return;
    }
    if (response?.error) {
      console.error(response.error);
      return;
    }
    if (response?.success === "Removed from Cart") {
      setcart(false);
      props.state((value) => !value);
    }
  };
  return (
    <div className={classes.cart}>
      <ImgSlider thumbnail={props.thumbnail} images={props.images} />
      <main>
        <div>
          <header>{props.name}</header>
          <p className={classes.brand}>{props.brand}</p>
        </div>
        <div>
          <StarRatings
            rating={props.rating}
            starRatedColor="blue"
            numberOfStars={5}
            name="rating"
            starDimension="20px"
            starSpacing="4px"
            starEmptyColor="white"
            starHoverColor="orange"
          />
        </div>
        <p>{props.description}</p>
        <p style={{ color: "red" }}>{props.stock} left</p>
      </main>
      <section>
        <p className={classes.price}>
          ${(((100 - props.discountPercentage) / 100) * props.price).toFixed(2)}
        </p>
        <p className={classes.oldprice}>${props.price}</p>
        {cart ? (
          <ShoppingCart
            sx={{ color: "green", fontSize: "40px" }}
            onClick={removeItemFromCart}
          />
        ) : null}
        <StripeCheckout
          stripeKey={process.env.REACT_APP_STRIPEKEY}
          token={makePayment}
          name={props.name}
          amount={
            (((100 - props.discountPercentage) / 100) * props.price).toFixed(
              2
            ) * 100
          }
          currency="USD"
          shippingAddress
          billingAddress
        >
          <button className={classes.buynow}>Buy Now</button>
        </StripeCheckout>
      </section>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Alert severity="error">{error}</Alert>
      </Backdrop>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open2}
        onClick={handleClose2}
      >
        <Alert severity="success">Congrats!! You bought an {props.name}</Alert>
      </Backdrop>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open3}
        onClick={handleClose3}
      >
        <Alert severity="error">An error occured during payment.</Alert>
      </Backdrop>
    </div>
  );
}

export default ProductCard;
