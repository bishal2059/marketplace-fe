import { Chip, Divider } from "@mui/material";
import React from "react";
import Footer from "../components/home/Footer";
import NavUser from "../components/user/NavUser";

function ProductPage() {
  return (
    <div>
      <NavUser />
      <Divider />
      <Divider>
        <Chip label="Contact Us" />
      </Divider>
      <Footer />
    </div>
  );
}

export default ProductPage;
