import Logo from "../img/logo.jpg";
import React from "react";
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";
function NavBar(props) {
  return (
    <div className={classes.nav}>
      <img src={Logo} alt="Logo" className={classes.navImg} />
      <div className={classes.title}>
        <p className={classes.titleName}>Marketplace</p>
        <p className={classes.subtitleName}>One place store</p>
      </div>
      {props.home ? (
        <>
          <Link className={classes.login} to="/login">
            Log in
          </Link>
          <Link className={classes.signup} to="/signup">
            Sign Up
          </Link>{" "}
        </>
      ) : (
        <>
          <Link className={classes.signup} to="/">
            Go Back
          </Link>
        </>
      )}
    </div>
  );
}

export default NavBar;
