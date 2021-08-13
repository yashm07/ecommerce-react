import { useState, useRef, useContext } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import CartContext from "../../../store/cart-context";

import classes from "./Product.module.css";

// import ProductAmount from "../../UI/ProductAmount";

const Product = (props) => {
  const [itemAmount, setItemAmount] = useState(1);
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  // temporary solution to amount increments
  const addItem = () => {
    setItemAmount((prevAmount) => {
      return prevAmount + 1;
    });
  };

  const removeItem = () => {
    setItemAmount((prevAmount) => {
      if (prevAmount > 1) {
        return prevAmount - 1;
      }
      return prevAmount;
    });
  };

  const amountHandler = (event) => {
    setItemAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const amount = +amountInputRef.current.value;

    if (amount < 1 || amount > 5) {
      setAmountIsValid(false);
      return;
    }

    setAmountIsValid(true);
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      description: props.description,
      image: props.image,
    });
  };

  return (
    <Col>
      <Card className={classes.card}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title className={classes.title}>
            {props.name} <span className={classes.price}>{price}</span>
          </Card.Title>
          <Card.Text className={classes.description}>
            {props.description}
          </Card.Text>
          <form onSubmit={submitHandler}>
            <Button
              variant="primary"
              className={classes.button}
              onClick={addItem}
              type="button"
            >
              +
            </Button>
            <label htmlFor="amount"></label>
            <input
              id="amount"
              ref={amountInputRef}
              type="number"
              value={itemAmount}
              onChange={amountHandler}
              className={classes.amount}
              min="1"
            />
            <Button
              variant="primary"
              className={classes.button}
              onClick={removeItem}
              type="button"
            >
              -
            </Button>
            <Button variant="primary" className={classes.addcart} type="submit">
              ADD TO CART
            </Button>
            {!amountIsValid && <p>Please enter a valid amount.</p>}
          </form>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
