import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import classes from "./CheckoutForm.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim().length === 0;

const CheckoutForm = (props) => {
  const [inputsValid, setInputsValid] = useState({
    name: true,
    email: true,
    address: true,
  });

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const addressInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const userName = nameInputRef.current.value;
    const userEmail = emailInputRef.current.value;
    const userAddress = addressInputRef.current.value;

    const userNameValid = !isEmpty(userName);
    const userEmailValid = !isEmpty(userEmail);
    const userAddressValid = !isEmpty(userAddress);

    setInputsValid({
      name: userNameValid,
      email: userEmailValid,
      address: userAddressValid,
    });

    const formValid = userNameValid && userEmailValid && userAddressValid;

    if (!formValid) {
      return;
    }

    props.onConfirm({
      name: userName,
      email: userEmail,
      address: userAddress,
    });
    // add form logic
  };

  return (
    <Form className={classes.panel} onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" ref={nameInputRef} />
        {!inputsValid.name && <p>Please enter a valid name.</p>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          ref={emailInputRef}
        />
        {!inputsValid.email && <p>Please enter a valid email.</p>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="Address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="address"
          placeholder="Enter address"
          ref={addressInputRef}
        />
        {!inputsValid.address && <p>Please enter a valid address.</p>}
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
