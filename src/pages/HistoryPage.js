import { Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
import Footer from "../components/home/Footer";
import NavUser from "../components/user/NavUser";
import UserProductBody from "../components/user/UserProductBody";
import { getAllHistory } from "../hooks/historyHandle";

function HistoryPage() {
  const [products, setproducts] = useState(0);
  useEffect(() => {
    (async function () {
      const response = await getAllHistory();
      console.log(response);
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
  }, []);
  return (
    <div>
      <NavUser goback={true} />
      <Divider />
      <UserProductBody allProducts={products} showhistory={true} />
      <Divider />
      <Footer />
    </div>
  );
}

export default HistoryPage;
