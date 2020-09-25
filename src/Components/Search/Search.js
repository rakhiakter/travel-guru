import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Map from "../Map/Map";
import Room from "../Room/Room";

const Search = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6}>
            <h1>half here</h1>
            <Room></Room>
            <Room></Room>
            <Room></Room>
          </Col>
          <Col xs={6}>
            <h1>half there</h1>
            <Map></Map>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Search;
