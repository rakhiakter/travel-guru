import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BookForm.css";

const BookForm = () => {
  return (
    <Container className="startBooking">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <b>Origin</b>
          </Form.Label>
          <Form.Control type="text" placeholder="origin" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            <b>Destination</b>
          </Form.Label>
          <Form.Control type="text" placeholder="Destination" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            <b>From</b>
          </Form.Label>
          <Form.Control type="number" placeholder="From" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            <b>To</b>
          </Form.Label>
          <Form.Control type="number" placeholder="To" />
        </Form.Group>
        <Link to="/search">
          <Button variant="warning" size="lg" active>
            Start booking
          </Button>{" "}
        </Link>
      </Form>
    </Container>
  );
};

export default BookForm;
