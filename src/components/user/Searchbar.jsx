import React, { useRef } from "react";
import { useContext } from "react";
import PageContext from "../../contexts/Pages";
import classes from "./Searchbar.module.css";

function Searchbar() {
  const search = useRef();
  const { setname } = useContext(PageContext);
  return (
    <div>
      <form
        className={classes.search}
        onSubmit={(e) => {
          e.preventDefault();
          setname(search.current.value);
        }}
      >
        <input
          type="text"
          name="search"
          placeholder="Search for any products"
          autoComplete="off"
          ref={search}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Searchbar;
