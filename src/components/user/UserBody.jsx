import React from "react";
import Categories from "./Categories";
import ProductShow from "./ProductShow";
import Searchbar from "./Searchbar";

function UserBody(props) {
  return (
    <div style={{ display: "flex" }}>
      <Categories />
      <div>
        <Searchbar />
        <ProductShow
          allProducts={props?.allProducts}
          previous={props?.previous}
          next={props?.next}
        />
      </div>
    </div>
  );
}

export default UserBody;
