import React from "react";
import classes from "./Searchbar.module.css";

function Searchbar() {
  return (
    <div>
      <form className={classes.search}>
        <input
          type="text"
          name="search"
          placeholder="Search for any products"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Searchbar;
