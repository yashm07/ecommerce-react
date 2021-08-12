import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Layout/Header";

// TEMPORARY
import Container from "react-bootstrap/Container";
// import Products from "./components/Products/Products";
// import Footer from "./components/Layout/Footer/Footer";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Container>
        <Header />
        {/* <Products /> */}
        <Cart />
      </Container>
      {/* <Footer /> */}
    </Fragment>
  );
}

export default App;
