import React from "react";
import Categories from "./Categories";
import Searchbar from "./Searchbar";
import UserOption from "./UserOption";

function UserBody() {
  return (
    <div style={{ display: "flex" }}>
      <Categories />
      <div>
        <Searchbar />
      </div>
      <UserOption />
    </div>
  );
}

export default UserBody;
