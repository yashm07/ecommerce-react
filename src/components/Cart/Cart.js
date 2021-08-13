import { useContext, useState } from "react";

// import image from "../../assets/testimage.jpeg";
import ProductItem from "./ProductItem/ProductItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TotalPrice from "./Price/TotalPrice";
import CartContext from "../../store/cart-context";
import CheckoutForm from "./Form/CheckoutForm";
import classes from "./Cart.module.css";

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
  const [checkout, setCheckout] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitData, setSubmitData] = useState(false);

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const checkoutHandler = () => {
    setCheckout(true);
  };

  const cancelHandler = () => {
    setCheckout(false);
  };

  const submitOrderHandler = async (userData) => {
    setSubmitting(true);
    await fetch(process.env.REACT_APP_DATABASE_URL + "orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    });
    setSubmitting(false);
    setSubmitData(true);
    cartCtx.clearCart();
  };

  return (
    <Row className="g-4">
      <Col md={6}>
        {!submitData &&
          cartCtx.items.map((cartitem) => (
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
        {!submitting && !submitData && !checkout && (
          <TotalPrice onCheckout={checkoutHandler} />
        )}
        {!submitting && !submitData && checkout && (
          <CheckoutForm
            onCancel={cancelHandler}
            onConfirm={submitOrderHandler}
          />
        )}
        {submitting && <p>Sending order request....</p>}
      </Col>
      {!submitting && submitData && (
        <p className={classes.confirmation}>Order has been sent!</p>
      )}
    </Row>
  );
};

export default Cart;
