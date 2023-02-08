import React from "react";
import classes from "./ProductShow.module.css";
import notfound from "../../img/notfound.png";
import HistoryProductCard from "./HistoryProductCard";

function HistoryProductShow(props) {
  return (
    <>
      <div className={classes.show}>
        {props.allProducts
          ? props.allProducts?.map((element) => {
              return (
                <HistoryProductCard
                  key={element._id}
                  id={element._id}
                  name={element.name}
                  brand={element.brand}
                  description={element.description}
                  discountPercentage={element.discountPercentage}
                  images={element.images}
                  price={element.price}
                  rating={element.rating}
                  thumbnail={element.thumbnail}
                  category={element.category}
                />
              );
            })
          : null}
        {props.allProducts.length === 0 ? (
          <>
            <img
              src={notfound}
              alt="PRODUCTS NOT FOUND"
              className={classes.favnotfound}
            />
          </>
        ) : null}
      </div>
    </>
  );
}

export default HistoryProductShow;
