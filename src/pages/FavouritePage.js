import { Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
import Footer from "../components/home/Footer";
import NavUser from "../components/user/NavUser";
import UserProductBody from "../components/user/UserProductBody";

import { getAllFavourite } from "../hooks/favouriteHandle";

function FavouritePage() {
  const [state, setstate] = useState(true);
  const [products, setproducts] = useState(0);
  useEffect(() => {
    (async function () {
      const response = await getAllFavourite();
      if (response?.error) {
        setproducts([]);
        return;
      }
      if (response?.clientError) {
        setproducts([]);
        return;
      }
      setproducts(response);
    })();
  }, [state]);
  return (
    <div>
      <NavUser goback={true} />
      <Divider />
      <UserProductBody
        allProducts={products}
        showfavourite={true}
        state={setstate}
      />
      <Divider />
      <Footer />
    </div>
  );
}

export default FavouritePage;
