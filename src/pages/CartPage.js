import { Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/home/Footer";
import NavUser from "../components/user/NavUser";
import UserProductBody from "../components/user/UserProductBody";
import { getAllCart } from "../hooks/cartHandle";

function CartPage() {
  const [state, setstate] = useState(true);
  const navigate = useNavigate();
  const [products, setproducts] = useState(0);

  useEffect(() => {
    (async function () {
      const response = await getAllCart();
      if (response?.unverified === true) {
        navigate("/products");
      }
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
  }, [navigate, state]);
  return (
    <div>
      <NavUser goback={true} />
      <Divider />
      <UserProductBody
        allProducts={products}
        showCart={true}
        state={setstate}
      />
      <Divider />
      <Footer />
    </div>
  );
}

export default CartPage;
