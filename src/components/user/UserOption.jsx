import React from "react";
import Favorite from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HistoryIcon from "@mui/icons-material/History";
import classes from "./UserOption.module.css";
import { useNavigate } from "react-router-dom";

function UserOption() {
  const navigate = useNavigate();
  return (
    <div className={classes.option}>
      <Favorite
        onClick={(e) => {
          e.preventDefault();
          navigate("/favourite");
        }}
        sx={{
          fontSize: "60px",
          color: "red",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}
      />
      <ShoppingCartIcon
        onClick={(e) => {
          e.preventDefault();
          navigate("/cart");
        }}
        sx={{
          fontSize: "60px",
          color: "green",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}
      />
      <HistoryIcon
        onClick={(e) => {
          e.preventDefault();
          navigate("/history");
        }}
        sx={{
          fontSize: "60px",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}
      />
    </div>
  );
}

export default UserOption;
