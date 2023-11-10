import React, { useState } from "react";
import classes from "./SignUp.module.css";
import { useRef } from "react";
import signUpHandler from "../../hooks/signUpHandle";

function SignUp() {
  const signUpRef = useRef(null);
  const errorRef = useRef(null);
  function showError(ele, message) {
    errorRef.current.textContent = message;
    setError(true);
  }
  const [error, setError] = useState(true);
  const formEle = [
    "firstName",
    "lastName",
    "gender",
    "dateOfBirth",
    "phoneNo",
    "userName",
    "email",
    "password",
    "cpassword",
  ];
  return (
    <div>
      <p className={classes.title}>Welcome to MARKETPLACE! SIGN IN...</p>
      <form
        className={classes.sign}
        ref={signUpRef}
        onSubmit={async (e) => {
          e.preventDefault();
          errorRef.current.textContent = "";
          const userData = {
            firstName: signUpRef.current.firstName.value,
            lastName: signUpRef.current.lastName.value,
            gender: signUpRef.current.gender.value,
            dateOfBirth: signUpRef.current.dateOfBirth.value,
            phoneNo: signUpRef.current.phoneNo.value,
            userName: signUpRef.current.userName.value,
            email: signUpRef.current.email.value,
            password: signUpRef.current.password.value,
            cpassword: signUpRef.current.cpassword.value,
          };
          const response = await signUpHandler(userData);

          if (response?.clientError) {
            errorRef.current.textContent = response.clientError;
            return;
          }
          if (response?.error) {
            Object.entries(response.error).forEach((v) => {
              showError(v[0], v[1]);
            });
          }
          if (response?.success) {
            errorRef.current.textContent = response.success;
            formEle.forEach((e) => {
              signUpRef.current[e].value = "";
            });
            setError(false);
          }
        }}
      >
        <div
          className={error ? classes.error : classes.success}
          ref={errorRef}
        ></div>
        <div className={classes.first}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            autoComplete="off"
          />
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name="lastName" id="lastName" autoComplete="off" />
          <label htmlFor="gender">Gender:</label>
          <select name="gender" id="gender" autoComplete="off">
            <option value="Male"> Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className={classes.second}>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            autoComplete="off"
          />
          <label htmlFor="phoneNo">Phone No:</label>
          <input type="number" name="phoneNo" id="phoneNo" autoComplete="off" />

          <label htmlFor="userName">UserName:</label>
          <input type="text" name="userName" id="userName" autoComplete="off" />
        </div>
        <div className={classes.third}>
          <label htmlFor="email"> Email:</label>
          <input type="email" name="email" id="email" autoComplete="off" />
          <label htmlFor="password"> Password:</label>
          <input type="password" name="password" id="password" />
          <label htmlFor="cpassword"> Confirm Password:</label>
          <input type="password" name="cpassword" id="cpassword" />
          <input type="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  );
}

export default SignUp;
