import { Fragment } from "react";
import BackgroundImage from "../Layout/BackgroundImage";
import AvailableProducts from "./AvailableProducts";

import classes from "./Products.module.css";

const Products = () => {
  return (
    <Fragment>
      <BackgroundImage />
      <p id={classes.heading}>Explore our products</p>
      <AvailableProducts />
    </Fragment>
  );
};

export default Products;
