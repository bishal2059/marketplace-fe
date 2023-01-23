import React from "react";
import ProductCard from "./ProductCard";

function ProductShow() {
  return (
    <div>
      <ProductCard
        name="iPhone X"
        brand="Apple"
        description="SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ..."
        discountPercentage={17.94}
        images={[
          "https://i.dummyjson.com/data/products/2/1.jpg",
          "https://i.dummyjson.com/data/products/2/2.jpg",
          "https://i.dummyjson.com/data/products/2/3.jpg",
          "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        ]}
        price={899}
        rating={4.44}
        stock={34}
        thumbnail="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
        category="smartphones"
      />
    </div>
  );
}

export default ProductShow;
