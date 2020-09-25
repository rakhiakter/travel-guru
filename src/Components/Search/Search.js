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
            <Room></Room>
          </Col>
          <Col xs={6}>
            <Map></Map>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Search;
