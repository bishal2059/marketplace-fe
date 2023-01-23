import React from "react";
import Categories from "./Categories";
import Searchbar from "./Searchbar";

function UserBody() {
  return (
    <div style={{ display: "flex" }}>
      <Categories />
      <div>
        <Searchbar />
      </div>
    </div>
  );
}

export default UserBody;
