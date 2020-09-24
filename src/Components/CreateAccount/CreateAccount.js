import React from "react";
import { Container, Form, Button } from "react-bootstrap";
const CreateAccount = () => {
  return (
    <Container>
      <Form id="form">
        <h4>Create Account</h4>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="First Name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Last Name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Username or email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>

        <Button variant="warning" size="lg" type="submit">
          Create an account
        </Button>
        <p>
          Already have an account? <button>Login</button>
        </p>
      </Form>
    </Container>
  );
};

export default CreateAccount;
