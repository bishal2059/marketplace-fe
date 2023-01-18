import { Divider, Chip } from "@mui/material";
import React from "react";
import Footer from "../components/home/Footer";
import MainBody from "../components/home/MainBody";
import NavBar from "../components/home/NavBar";

function HomePage() {
  return (
    <div>
      <NavBar home={true} />
      <Divider />
      <MainBody />
      <Divider>
        <Chip label="Contact Us" />
      </Divider>
      <Footer />
    </div>
  );
}

export default HomePage;
