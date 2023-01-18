import React from "react";
import { Divider, Chip } from "@mui/material";
import NavBar from "../components/home/NavBar";
import Footer from "../components/home/Footer";
import SignUp from "../components/home/SignUp";

function SignupPage() {
  return (
    <div>
      <NavBar home={false} />
      <Divider />
      <SignUp />
      <Divider>
        <Chip label="Contact Us" />
      </Divider>
      <Footer />
    </div>
  );
}

export default SignupPage;
