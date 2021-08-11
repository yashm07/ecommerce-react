import { Fragment } from "react";
import Button from "react-bootstrap/Button";

import classes from "./ProductAmount.module.css";

const ProductAmount = (props) => {
  return (
    <Fragment>
      <Button variant="primary" className={classes.button}>
        +
      </Button>
      {/* <button>HELLO THERE</button> */}
      {/* <div> */}
      <label htmlFor="amount"></label>
      <input
        id="amount"
        type="number"
        defaultValue="1"
        className={classes.amount}
      />
      {/* </div> */}
      <Button variant="primary" className={classes.button}>
        -
      </Button>
    </Fragment>
  );
};

export default ProductAmount;
