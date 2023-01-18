import React from "react";
import { Link } from "react-router-dom";
import Poster from "../../img/poster.jpg";
import classes from "./MainBody.module.css";
import MainCard from "./MainCard";

function MainBody() {
  return (
    <div className={classes.main}>
      <img src={Poster} alt="Poster" className={classes.imgs} />
      <div className={classes.maincard}>
        <MainCard />
        <Link className={classes.join} to="/login">
          Start Shopping
        </Link>
      </div>
    </div>
  );
}

export default MainBody;
