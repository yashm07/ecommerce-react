import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Layout/Header";
import BackgroundImage from "./components/Layout/BackgroundImage";

// TEMPORARY
import Container from "react-bootstrap/Container";
import Products from "./components/Products/Products";

function App() {
  return (
    <Fragment>
      <Container>
        <Header />
        <Products />
      </Container>
    </Fragment>
  );
}

export default App;
