import React from "react";
import StarRatings from "react-star-ratings";
import ImgSlider from "./ImgSlider";
import classes from "./ProductCard.module.css";

function HistoryProductCard(props) {
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
      </main>
      <section>
        <p>Sold Price:</p>
        <p className={classes.price} style={{ fontWeight: 600 }}>
          ${(((100 - props.discountPercentage) / 100) * props.price).toFixed(2)}
        </p>
        <p>DELIVERED: ✅ </p>
      </section>
    </div>
  );
}

export default HistoryProductCard;
