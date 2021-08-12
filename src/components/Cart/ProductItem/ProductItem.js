import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ProductAmount from "../../UI/ProductAmount";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <Container>
      <Card className={classes.card}>
        <Row className="no-gutters">
          <Col md={5} lg={5}>
            <Card.Img variant="top" src={props.image} />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title className={classes.title}>
                {props.name}
                <span className={classes.price}>{price}</span>
              </Card.Title>
              <Card.Text className={classes.description}>
                {props.description}
              </Card.Text>
              <ProductAmount value={props.amount} />
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ProductItem;
