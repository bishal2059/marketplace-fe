import { Favorite, FavoriteBorder, ShoppingCart } from "@mui/icons-material";
import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import { Backdrop, Alert } from "@mui/material";
import { addToCart } from "../../hooks/cartHandle";
import {
  addToFavourite,
  removeFromFavourite,
} from "../../hooks/favouriteHandle";
import ImgSlider from "./ImgSlider";
import classes from "./ProductCard.module.css";

function ProductCard(props) {
  const [error, seterror] = useState(null);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleToggle = (e) => {
    setOpen(!open);
  };
  const handleToggle1 = (e) => {
    setOpen1(!open);
  };
  const handleToggle2 = (e) => {
    setOpen2(!open);
  };
  const [favourite, setfavourite] = useState(props.favourite);
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

        {favourite ? (
          <Favorite
            sx={{ color: "red", fontSize: "40px" }}
            onClick={async () => {
              if (new URL(window.location.href).pathname !== "/favourite") {
                handleToggle2();
                return;
              }
              const response = await removeFromFavourite(props.id);
              if (response?.clientError) {
                console.error(response.clientError);
                return;
              }
              if (response?.error) {
                console.error(response.error);
                return;
              }
              if (response?.success === "Removed from Favourite") {
                setfavourite(false);
                props.state((value) => !value);
              }
            }}
          />
        ) : (
          <FavoriteBorder
            sx={{ color: "red", fontSize: "40px" }}
            onClick={async () => {
              const response = await addToFavourite(props.id);
              if (response?.clientError) {
                console.error(response.clientError);
                return;
              }
              if (response?.error) {
                console.error(response.error);
                return;
              }
              if (response?.success === "Added to Favourite") {
                setfavourite(true);
                props.state((value) => !value);
              }
            }}
          />
        )}

        {cart ? (
          <ShoppingCart
            sx={{ color: "green", fontSize: "40px" }}
            onClick={async () => {
              handleToggle1();
            }}
          />
        ) : (
          <ShoppingCart
            sx={{ fontSize: "40px" }}
            onClick={async () => {
              const response = await addToCart(props.id);
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
              if (response?.success === "Added to Cart") {
                setcart(true);
                props.state((value) => !value);
              }
            }}
          />
        )}
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
        open={open1}
        onClick={handleClose1}
      >
        <Alert severity="warning">
          Please go to cart to remove items from cart
        </Alert>
      </Backdrop>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open2}
        onClick={handleClose2}
      >
        <Alert severity="warning">
          Please go to favourite to remove items from favourite.
        </Alert>
      </Backdrop>
    </div>
  );
}

export default ProductCard;
