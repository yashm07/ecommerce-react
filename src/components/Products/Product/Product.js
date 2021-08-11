import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import classes from "./Product.module.css";

import ProductAmount from "../../UI/ProductAmount";

const Product = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <Col>
      <Card className={classes.card}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title className={classes.title}>
            {props.name} <span className={classes.price}>{price}</span>
          </Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <ProductAmount />
          <Button variant="primary" className={classes.addcart}>
            ADD TO CART
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
