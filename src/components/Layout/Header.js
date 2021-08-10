import testLogo from "../../assets/testlogo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import classes from "./Header.module.css";
import { BiCartAlt } from "react-icons/bi";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" id={classes.navbar}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={testLogo} className={classes.logo} alt="Company logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes" id={classes.cart}>
              Cart
              <BiCartAlt id={classes.icon} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
