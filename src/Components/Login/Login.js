import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <Container>
      <Form id="form">
        <h4>Login</h4>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>UserName or Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
          <a href="#">Forgot Password</a>
        </Form.Group>
        <Button variant="warning" size="lg" type="submit">
          Login
        </Button>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
