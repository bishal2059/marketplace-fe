import { ShoppingCart } from "@mui/icons-material";
import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import { Backdrop, Alert } from "@mui/material";
import { removeFromCart } from "../../hooks/cartHandle";
import ImgSlider from "./ImgSlider";
import classes from "./ProductCard.module.css";

function ProductCard(props) {
  const [error, seterror] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = (e) => {
    setOpen(!open);
  };
  const [cart, setcart] = useState(props.cart);
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
            onClick={async () => {
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
            }}
          />
        ) : null}
        <button className={classes.buynow}>Buy now</button>
      </section>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Alert severity="error">{error}</Alert>
      </Backdrop>
    </div>
  );
}

export default ProductCard;
