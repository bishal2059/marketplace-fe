import React, { useState } from "react";
import { verifyUser } from "../../hooks/userHttp";
import profile from "../../img/profile.png";
import classes from "./UserDetails.module.css";
import { Backdrop, Alert } from "@mui/material";

function UserDetails(props) {
  const [emailSent, setemailSent] = useState(true);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = (e) => {
    setOpen(!open);
  };
  return (
    <div className={classes.user}>
      <img src={profile} alt="user" className={classes.profilepic} />
      <p>
        <span>Name: </span>
        {props.firstName} {props.lastName}
      </p>
      <p>
        <span>Sex: </span>
        {props.gender} {props.age}
      </p>
      <p>
        <span>Date of Birth: </span> {props.dateOfBirth?.slice(0, 10)}
      </p>
      <p>
        <span>Email:</span> {props.email}
      </p>
      <p>
        <span>User Name:</span> {props.userName}
      </p>
      <p>
        <span>PhoneNo:</span> {props.phoneNo}
      </p>
      {props.verified ? (
        <p>
          <span>Verified: </span> ✅
        </p>
      ) : (
        <p>
          <span>Verified: </span> ❌
        </p>
      )}
      <button>Change Password</button>
      {props.verified ? null : (
        <button
          onClick={async () => {
            const response = await verifyUser();
            if (response?.error) {
              setemailSent(false);
              handleToggle();
              return;
            }
            handleToggle();
          }}
        >
          Verify Email
        </button>
      )}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        {emailSent ? (
          <Alert severity="success">Verification Email Sent!</Alert>
        ) : (
          <Alert severity="error">An Error occured please try again</Alert>
        )}
      </Backdrop>
    </div>
  );
}

export default UserDetails;
