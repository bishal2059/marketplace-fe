import { Chip, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../components/home/Footer";
import NavUser from "../components/user/NavUser";
import UserBody from "../components/user/UserBody";
import PageContext from "../contexts/Pages";
import getAllProducts from "../hooks/getAllProducts";

function ProductPage() {
  const [state, setstate] = useState(true);
  const limit = 5;
  const [products, setproducts] = useState({});
  const [page, setpage] = useState(1);
  const [name, setname] = useState("");

  useEffect(() => {
    (async function () {
      const respone = await getAllProducts(limit, page, name);
      setproducts(respone);
    })();
  }, [page, name, state]);

  return (
    <div>
      <NavUser />
      <Divider />
      <PageContext.Provider value={{ page, name, setpage, setname }}>
        <UserBody
          allProducts={products?.products}
          previous={products?.previous}
          next={products?.next}
          state={setstate}
        />
      </PageContext.Provider>
      <Divider>
        <Chip label="Contact Us" />
      </Divider>
      <Footer />
    </div>
  );
}

export default ProductPage;
