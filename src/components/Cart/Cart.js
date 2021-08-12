import { useContext } from "react";

// import image from "../../assets/testimage.jpeg";
import ProductItem from "./ProductItem/ProductItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TotalPrice from "./Price/TotalPrice";
import CartContext from "../../store/cart-context";

// const cartItems = [
//   {
//     id: "p10",
//     name: "Keyboard",
//     description:
//       "Some quick example text to build on the card title and make up the bulk of the card's content.",
//     price: 29.99,
//     amount: 2,
//     image: image,
//   },
//   {
//     id: "p11",
//     name: "Arduino",
//     description:
//       "Some quick example text to build on the card title and make up the bulk of the card's content.",
//     price: 59.99,
//     amount: 3,
//     image: image,
//   },
// ];

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <Row className="g-4">
      <Col md={6}>
        {cartCtx.items.map((cartitem) => (
          <ProductItem
            key={cartitem.id}
            name={cartitem.name}
            price={cartitem.price}
            description={cartitem.description}
            image={cartitem.image}
            amount={cartitem.amount}
            onAdd={cartItemAddHandler.bind(null, cartitem)}
            onRemove={cartItemRemoveHandler.bind(null, cartitem.id)}
          />
        ))}
      </Col>
      <Col>
        <TotalPrice />
      </Col>
    </Row>
  );
};

export default Cart;
