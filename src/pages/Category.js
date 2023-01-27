import { Chip, Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/home/Footer";
import NavUser from "../components/user/NavUser";
import UserBody from "../components/user/UserBody";
import getCategories from "../hooks/getCategories";
import PageContext from "../contexts/Pages";

function Category() {
  const { category } = useParams();
  const limit = 5;
  const [products, setproducts] = useState({});
  const [page, setpage] = useState(1);
  const [name, setname] = useState("");
  useEffect(() => {
    (async function () {
      const respone = await getCategories(limit, page, name, category);
      setproducts(respone);
    })();
  }, [page, name, category]);
  useEffect(() => {
    setname("");
    setpage(1);
  }, [category]);
  return (
    <div>
      <NavUser />
      <Divider />
      <PageContext.Provider value={{ page, name, setpage, setname }}>
        <UserBody
          allProducts={products?.products}
          previous={products?.previous}
          next={products?.next}
          active={category}
        />
      </PageContext.Provider>
      <Divider>
        <Chip label="Contact Us" />
      </Divider>
      <Footer />
    </div>
  );
}

export default Category;
