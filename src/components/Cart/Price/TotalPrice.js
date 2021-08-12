import Button from "react-bootstrap/Button";

import classes from "./TotalPrice.module.css";

const TotalPrice = () => {
  return (
    <div className={classes.panel}>
      <h3 className={classes.subheading1}>
        Subtotal<span className={classes.price}>$10.99</span>
      </h3>
      <hr className={classes.line} />
      <h3 className={classes.subheading2}>
        Shipping<span className={classes.price}>$12.99</span>
      </h3>
      <h3 className={classes.subheading3}>
        Tax<span className={classes.price}>$2.99</span>
      </h3>
      <hr className={classes.line} />
      <h3 className={classes.total}>
        Total<span className={classes.price}>$39.99</span>
      </h3>
      <Button variant="primary" className={classes.checkout}>
        CHECKOUT
      </Button>
    </div>
  );
};

export default TotalPrice;
