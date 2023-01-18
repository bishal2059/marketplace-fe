import React from "react";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";

function Login() {
  return (
    <div className={classes.login}>
      <p className={classes.title}>Welcome Back, LOGIN</p>
      <form className={classes.loginform}>
        <label htmlFor="email"> Email:</label>
        <input type="email" name="email" />
        <label htmlFor="password"> Password:</label>
        <input type="password" name="password" />
        <input type="submit" value="Login" />
        <Link className={classes.link}> Forgot password</Link>
      </form>

      <p>
        Don't have an account?
        <Link className={classes.link} to="/signup">
          Signup
        </Link>
      </p>
    </div>
  );
}

export default Login;
