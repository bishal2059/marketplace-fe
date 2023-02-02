import React from "react";
import classes from "./ProductShow.module.css";
import CartProductCard from "./CartProductCard";
import notfound from "../../img/notfound.png";

function CartProductShow(props) {
  return (
    <>
      <div className={classes.show}>
        {props.allProducts
          ? props.allProducts?.map((element) => {
              return (
                <CartProductCard
                  key={element._id}
                  id={element._id}
                  name={element.name}
                  brand={element.brand}
                  description={element.description}
                  discountPercentage={element.discountPercentage}
                  images={element.images}
                  price={element.price}
                  rating={element.rating}
                  stock={element.stock}
                  thumbnail={element.thumbnail}
                  category={element.category}
                  favourite={element.favourite}
                  cart={element.cart}
                  state={props.state}
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

export default CartProductShow;
