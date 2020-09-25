import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import backgroundImg from "../../Images/image/rectangle 1.png";
import Destination from "../Destination/Destination";
import Details from "../Details/Details";
import "./Home.css";
const Home = () => {
  return (
    <div id="home">
      <Container>
        <Row>
          <Col sm={3}>
            <Details></Details>
          </Col>
          <Col sm={9}>
            <Destination></Destination>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
