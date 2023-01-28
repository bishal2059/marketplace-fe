import { Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
import Footer from "../components/home/Footer";
import NavUser from "../components/user/NavUser";
import UserProductBody from "../components/user/UserProductBody";
import { getAllFavourite } from "../hooks/favouriteHandle";

function FavouritePage() {
  const [products, setproducts] = useState(0);

  useEffect(() => {
    (async function () {
      const response = await getAllFavourite();
      if (response?.error) {
        setproducts([]);
        return;
      }

      setproducts(response);
    })();
  }, [products]);
  return (
    <div>
      <NavUser goback={true} />
      <Divider />
      <UserProductBody allProducts={products} />
      <Divider />
      <Footer />
    </div>
  );
}

export default FavouritePage;
