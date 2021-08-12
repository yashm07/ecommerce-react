import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";

import classes from "./Footer.module.css";

import testlogo from "../../../assets/testlogo.png";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={testlogo} className={classes.logo} alt="Test logo" />
            <p className={classes["company-description"]}>
              | Selling the greatest products.
            </p>
          </Col>
          <Col>Terms</Col>
          <Col>Privacy</Col>
          <Col>Conditions</Col>
          <Col>
            <AiFillLinkedin className={classes.icon} />
            <AiOutlineInstagram className={classes.icon} />
            <AiFillFacebook className={classes.icon} />
            <AiFillTwitterCircle className={classes.icon} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
