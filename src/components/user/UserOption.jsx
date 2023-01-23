import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HistoryIcon from "@mui/icons-material/History";
import classes from "./UserOption.module.css";

function UserOption() {
  return (
    <div className={classes.option}>
      <FavoriteBorderIcon
        fontSize="large"
        sx={{
          color: "red",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}
      />
      <ShoppingCartIcon
        fontSize="large"
        sx={{
          color: "green",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}
      />
      <HistoryIcon
        fontSize="large"
        sx={{
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}
      />
    </div>
  );
}

export default UserOption;
