import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HistoryIcon from "@mui/icons-material/History";
import classes from "./UserOption.module.css";

function UserOption() {
  return (
    <div className={classes.option}>
      <FavoriteBorderIcon fontSize="large" />
      <ShoppingCartIcon fontSize="large" />
      <HistoryIcon fontSize="large" />
    </div>
  );
}

export default UserOption;
