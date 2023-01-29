import React from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import loginHandler from "../../hooks/loginHandler";
function Login() {
  const navigate = useNavigate();
  const errorRef = useRef(null);
  const loginRef = useRef(null);
  return (
    <div className={classes.login}>
      <p className={classes.title}>Welcome Back, LOGIN</p>
      <form
        ref={loginRef}
        className={classes.loginform}
        onSubmit={async (e) => {
          e.preventDefault();
          errorRef.current.textContent = "";
          const userData = {
            email: loginRef.current.email.value,
            password: loginRef.current.password.value,
          };
          const response = await loginHandler(userData);
          if (response.clientError) {
            errorRef.current.textContent = response.clientError;
            return;
          }
          if (response.error) {
            Object.entries(response.error).forEach((v) => {
              errorRef.current.textContent = v[1];
            });
          }
          if (response.user) {
            navigate("/products");
          }
        }}
      >
        <label htmlFor="email"> Email:</label>
        <input type="email" name="email" autoComplete="off" />
        <label htmlFor="password"> Password:</label>
        <input type="password" name="password" autoComplete="off" />
        <div ref={errorRef} className={classes.error}></div>
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
