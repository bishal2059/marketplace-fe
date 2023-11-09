import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      <p className={classes.info}>
        {" "}
        All pictures belong to the respective owners.
      </p>
      <p className={(classes.info, classes.copy)}>
        Copyright: Bishal Sapkota 2023
      </p>
    </div>
  );
}

export default Footer;
