import React from "react";
import Categories from "./Categories";
import ProductShow from "./ProductShow";
import Searchbar from "./Searchbar";
import UserOption from "./UserOption";

function UserBody() {
  return (
    <div style={{ display: "flex" }}>
      <Categories />
      <div>
        <Searchbar />
        <ProductShow />
      </div>
      <UserOption />
    </div>
  );
}

export default UserBody;
