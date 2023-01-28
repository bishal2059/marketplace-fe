import React, { useState } from "react";
import { Backdrop } from "@mui/material";
import classes from "./ImgSlider.module.css";

function ImgSlider(props) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = (e) => {
    setOpen(!open);
  };
  const [number, setNumber] = useState(0);
  const imgList = props?.images;
  return (
    <>
      <img src={props?.thumbnail} alt="thumbnail" onClick={handleToggle} />
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={(e) => {
            if (e.target.tagName === "SPAN") return;
            handleClose();
          }}
        >
          {number > 0 ? (
            <span
              onClick={() => {
                if (number > 0) {
                  setNumber(number - 1);
                }
              }}
              className={classes.before}
            >
              &lt;
            </span>
          ) : null}

          <img
            src={imgList[number]}
            alt="products"
            style={{ width: "600px", height: "600px", borderRadius: "50px" }}
          />
          {number < imgList.length - 1 ? (
            <span
              onClick={() => {
                if (number < imgList.length - 1) {
                  setNumber(number + 1);
                }
              }}
              className={classes.after}
            >
              &gt;
            </span>
          ) : null}
        </Backdrop>
      </div>
    </>
  );
}

export default ImgSlider;
