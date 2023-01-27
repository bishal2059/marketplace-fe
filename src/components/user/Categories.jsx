import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Categories.module.css";

function Categories(props) {
  const navigate = useNavigate();
  //prettier-ignore
  const categories = [
    "furniture","skincare","groceries","sunglasses","laptops","smartphones","fragrances","home-decoration","automotive","motorcycle","lighting", "mens-shirts","mens-shoes","mens-watches",
    "tops","womens-dresses","womens-shoes","womens-watches","womens-bags",
    "womens-jewellery",
  ];
  return (
    <div>
      <ul
        className={classes.categories}
        onClick={(e) => {
          e.preventDefault();
          if (e.target.tagName !== "LI") return;
          const target = e.target.textContent.toLowerCase();
          if (!target) return;
          navigate(`/category/${target}`);
        }}
      >
        <h2 className={classes.title}>CATEGORIES</h2>
        {categories.map((e) => {
          return (
            <li key={e} className={props.active === e ? classes.active : null}>
              {e.charAt(0).toUpperCase() + e.slice(1)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
