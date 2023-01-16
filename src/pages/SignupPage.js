import React from "react";
import { Divider, Chip } from "@mui/material";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function SignupPage() {
  return (
    <div>
      <NavBar home={false} />
      <Divider />
      <Divider>
        <Chip label="Contact Us" />
      </Divider>
      <Footer />
    </div>
  );
}

export default SignupPage;
