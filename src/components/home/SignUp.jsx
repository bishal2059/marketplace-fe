import React from "react";
import classes from "./SignUp.module.css";

function SignUp() {
  return (
    <div>
      <p className={classes.title}>Welcome to MARKETPLACE! SIGN IN...</p>
      <form className={classes.sign}>
        <div className={classes.first}>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" name="firstName" />
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name="lastName" />
          <label htmlFor="gender">Gender:</label>
          <select name="gender">
            <option value="Male"> Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className={classes.second}>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input type="date" name="dateOfBirth" />
          <label htmlFor="phoneNo">Phone No:</label>
          <input type="number" name="phoneNo" />

          <label htmlFor="userName">UserName:</label>
          <input type="text" name="userName" />
        </div>
        <div className={classes.third}>
          <label htmlFor="email"> Email:</label>
          <input type="email" name="email" />
          <label htmlFor="password"> Password:</label>
          <input type="password" name="password" />
          <label htmlFor="cpassword"> Confirm Password:</label>
          <input type="cpassword" name="cpassword" />
          <input type="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  );
}

export default SignUp;
