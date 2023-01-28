import { Favorite, FavoriteBorder, ShoppingCart } from "@mui/icons-material";
import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import {
  addToFavourite,
  removeFromFavourite,
} from "../../hooks/favouriteHandle";
import ImgSlider from "./ImgSlider";
import classes from "./ProductCard.module.css";

function ProductCard(props) {
  const [favourite, setfavourite] = useState(props.favourite);
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
              }
            }}
          />
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
