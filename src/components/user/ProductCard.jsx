import { Favorite, FavoriteBorder, ShoppingCart } from "@mui/icons-material";
import React from "react";
import StarRatings from "react-star-ratings";
import classes from "./ProductCard.module.css";

function ProductCard(props) {
  return (
    <div className={classes.cart}>
      <img src={props.thumbnail} alt="Thumbnail" />
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
        {props.favourite ? (
          <Favorite sx={{ color: "red", fontSize: "40px" }} />
        ) : (
          <FavoriteBorder sx={{ color: "red", fontSize: "40px" }} />
        )}
        {props.cart ? (
          <ShoppingCart sx={{ color: "green", fontSize: "40px" }} />
        ) : (
          <ShoppingCart sx={{ fontSize: "40px" }} />
        )}
      </section>
    </div>
  );
}

export default ProductCard;
