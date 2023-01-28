import React from "react";
import Logo from "../../img/logo.jpg";
import { Link } from "react-router-dom";
import profile from "../../img/profile.png";
import classes from "./NavUser.module.css";

function NavUser(props) {
  return (
    <div className={classes.nav}>
      <img src={Logo} alt="Logo" className={classes.navImg} />
      <div className={classes.title}>
        <p className={classes.titleName}>Marketplace</p>
        <p className={classes.subtitleName}>One place store</p>
      </div>
      {props.goback ? (
        <Link className={classes.signup} to="/products">
          Go Back
        </Link>
      ) : null}
      <Link className={classes.login} to="/">
        <img src={profile} alt="user" className={classes.img} />
      </Link>

      <Link className={classes.signup} to="/">
        Log out
      </Link>
    </div>
  );
}

export default NavUser;
