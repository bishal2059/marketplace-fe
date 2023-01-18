import React from "react";
import NavBar from "../components/home/NavBar";
import { Divider, Chip } from "@mui/material";
import Footer from "../components/home/Footer";
import Login from "../components/home/Login";

function LoginPage() {
  return (
    <div>
      <NavBar home={false} />
      <Divider />
      <Login />
      <Divider>
        <Chip label="Contact Us" />
      </Divider>
      <Footer />
    </div>
  );
}

export default LoginPage;
