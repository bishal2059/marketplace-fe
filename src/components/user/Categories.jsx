import React from "react";
import classes from "./Categories.module.css";

function Categories() {
  return (
    <div>
      <ul className={classes.categories}>
        <h2 className={classes.title}> CATEGORIES</h2>
        <li>Furniture</li>
        <li>Skin-care</li>
        <li>Groceries</li>
        <li>Sunglasses</li>
        <li>Laptops</li>
        <li>Smartphones</li>
        <li>Fragnances</li>
        <li>Home-decoration</li>
        <li>Automotive</li>
        <li>Motorcycle</li>
        <li>Lighting</li>
        <li>Mens-shirts</li>
        <li>Mens-shoes</li>
        <li>Mens-watches</li>
        <li>Tops</li>
        <li>Womens-dresses</li>
        <li>Womens-shoes</li>
        <li>Womens-watches</li>
        <li>Womens-bags</li>
        <li>Womens-jewellery</li>
      </ul>
    </div>
  );
}

export default Categories;
