import React from "react";
import Logo from "../../img/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import profile from "../../img/profile.png";
import classes from "./NavUser.module.css";
import { logoutHandle } from "../../hooks/logoutHandle";

function NavUser(props) {
  const navigate = useNavigate();
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
      <Link className={classes.login} to="/users">
        <img src={profile} alt="user" className={classes.img} />
      </Link>

      <div
        className={classes.signup}
        onClick={async () => {
          const response = await logoutHandle();
          if (response?.success) {
            navigate("/");
          }
        }}
        style={{ cursor: "pointer" }}
      >
        Log out
      </div>
    </div>
  );
}

export default NavUser;
