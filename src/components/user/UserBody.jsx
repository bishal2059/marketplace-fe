import React from "react";
import Categories from "./Categories";
import ProductShow from "./ProductShow";
import Searchbar from "./Searchbar";
import UserOption from "./UserOption";

function UserBody(props) {
  return (
    <div style={{ display: "flex" }}>
      <Categories active={props.active} />
      <div>
        <Searchbar />
        <ProductShow
          allProducts={props?.allProducts}
          previous={props?.previous}
          next={props?.next}
        />
      </div>
      <UserOption />
    </div>
  );
}

export default UserBody;
