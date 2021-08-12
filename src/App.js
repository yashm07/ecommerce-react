import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Layout/Header";

// TEMPORARY
import Container from "react-bootstrap/Container";
import Products from "./components/Products/Products";
// import Footer from "./components/Layout/Footer/Footer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      <Container>
        <Header onShowCart={showCartHandler} onHideCart={hideCartHandler} />
        {!showCart && <Products />}
        {showCart && <Cart />}
      </Container>
      {/* <Footer /> */}
    </CartProvider>
  );
}

export default App;
