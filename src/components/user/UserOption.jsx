import React, { useState } from "react";
import Favorite from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HistoryIcon from "@mui/icons-material/History";
import { Backdrop, Alert } from "@mui/material";
import classes from "./UserOption.module.css";
import { useNavigate } from "react-router-dom";
import { getAllCart } from "../../hooks/cartHandle";

function UserOption() {
  const [error, seterror] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = (e) => {
    setOpen(!open);
  };
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
        onClick={async (e) => {
          e.preventDefault();
          const response = await getAllCart();
          if (response?.unverified === true) {
            seterror(response?.message);
            handleToggle();
          } else {
            navigate("/cart");
          }
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
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Alert severity="error">{error}</Alert>
      </Backdrop>
    </div>
  );
}

export default UserOption;
