import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import About from "../About/About";
import BookForm from "../BookForm/BookForm";

const Booking = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6}>
            <h1>details</h1>
          </Col>
          <Col xs={6}>
            <BookForm></BookForm>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Booking;
