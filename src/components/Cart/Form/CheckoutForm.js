import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import classes from "./CheckoutForm.module.css";

const CheckoutForm = (props) => {
  return (
    <Form className={classes.panel}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Address">
        <Form.Label>Address</Form.Label>
        <Form.Control type="password" placeholder="Enter address" />
      </Form.Group>
      <div className={classes.button}>
        <Button
          variant="primary"
          type="button"
          className={classes.cancel}
          onClick={props.onCancel}
        >
          Cancel
        </Button>
        <Button variant="primary" type="submit" className={classes.submit}>
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default CheckoutForm;
