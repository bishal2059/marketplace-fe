import React from "react";
import ProductCard from "./ProductCard";
import classes from "./ProductShow.module.css";
import { useContext } from "react";
import PageContext from "../../contexts/Pages";

function ProductShow(props) {
  let { page, setpage } = useContext(PageContext);
  return (
    <div className={classes.show}>
      {props.allProducts
        ? props.allProducts.map((element) => {
            console.log(element);
            return (
              <ProductCard
                name={element.name}
                brand={element.brand}
                description={element.description}
                discountPercentage={element.discountPercentage}
                images={element.images}
                price={element.price}
                rating={element.rating}
                stock={element.stock}
                thumbnail={element.thumbnail}
                category={element.category}
              />
            );
          })
        : null}
      <div>
        {props.previous ? (
          <button
            onClick={() => {
              setpage(page + 1);
            }}
          >
            Previous
          </button>
        ) : null}
        {props.next ? (
          <button
            onClick={() => {
              setpage(page - 1);
            }}
          >
            Next
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default ProductShow;

// name="iPhone X"
//         brand="Apple"
//         description="SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ..."
//         discountPercentage={17.94}
//         images={[
//           "https://i.dummyjson.com/data/products/2/1.jpg",
//           "https://i.dummyjson.com/data/products/2/2.jpg",
//           "https://i.dummyjson.com/data/products/2/3.jpg",
//           "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
//         ]}
//         price={899}
//         rating={4.44}
//         stock={34}
//     thumbnail="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
//         category="smartphones"
