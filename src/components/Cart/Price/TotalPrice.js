import { useContext } from "react";

import Button from "react-bootstrap/Button";
import CartContext from "../../../store/cart-context";

import classes from "./TotalPrice.module.css";

const TotalPrice = () => {
  const cartCtx = useContext(CartContext);

  const subtotal = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  return (
    <div className={classes.panel}>
      <h3 className={classes.subheading1}>
        Subtotal<span className={classes.price}>{subtotal}</span>
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
      {hasItems && (
        <Button variant="primary" className={classes.checkout}>
          CHECKOUT
        </Button>
      )}
    </div>
  );
};

export default TotalPrice;
