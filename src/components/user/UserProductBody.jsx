import React from "react";
import FavouriteProductShow from "./FavouriteProductShow";
import UserOption from "./UserOption";
import classes from "./UserProductBody.module.css";

function UserProductBody(props) {
  return (
    <div>
      <div>
        <h2 className={classes.title}>Favourite Products</h2>
        <UserOption />
      </div>
      <FavouriteProductShow allProducts={props.allProducts} />
    </div>
  );
}

export default UserProductBody;
