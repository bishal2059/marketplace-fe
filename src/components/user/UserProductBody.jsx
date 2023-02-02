import React from "react";
import FavouriteProductShow from "./FavouriteProductShow";
import CartProductShow from "./CartProductShow";
import UserOption from "./UserOption";
import classes from "./UserProductBody.module.css";

function UserProductBody(props) {
  return (
    <div>
      <div>
        {props.showfavourite ? (
          <h2 className={classes.title}>Favourite Products</h2>
        ) : null}
        {props.showCart ? (
          <h2 className={classes.title}>Cart Products</h2>
        ) : null}
        <UserOption />
      </div>
      {props.showfavourite ? (
        <FavouriteProductShow
          allProducts={props.allProducts}
          state={props.state}
        />
      ) : null}
      {props.showCart ? (
        <CartProductShow allProducts={props.allProducts} state={props.state} />
      ) : null}
    </div>
  );
}

export default UserProductBody;
