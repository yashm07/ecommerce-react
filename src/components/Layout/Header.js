import { useContext } from "react";

import Logo from "../../assets/logo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import classes from "./Header.module.css";
import { BiCartAlt } from "react-icons/bi";
import Badge from "react-bootstrap/Badge";
import CartContext from "../../store/cart-context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const numCartItems = cartCtx.items.reduce((num, item) => {
    return num + item.amount;
  }, 0);

  const showBadge =
    numCartItems !== 0 ? (
      <Badge bg="secondary" className={classes.badge}>
        {numCartItems}
      </Badge>
    ) : (
      ""
    );

  return (
    <Navbar collapseOnSelect expand="lg" id={classes.navbar}>
      <Container>
        <Navbar.Brand onClick={props.onHideCart} href="#">
          <img src={Logo} className={classes.logo} alt="Company logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link eventKey={2} onClick={props.onShowCart} id={classes.cart}>
              Cart
              {showBadge}
              <BiCartAlt id={classes.icon} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
