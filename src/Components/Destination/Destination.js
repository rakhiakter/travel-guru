import React from "react";
import { Card, CardDeck, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Destination.css";
const Destination = () => {
  return (
    <div>
      <Container>
        <CardDeck>
          <Card>
            <Link to="/booking">
              <Card.Img
                className="hr"
                variant="top"
                src={require("../../Images/image/sajek.png")}
              />
              <p className="bottom">Sajek Valley</p>
            </Link>
          </Card>

          <Card>
            <Link to="/booking">
              <Card.Img
                className="hr"
                variant="top"
                src={require("../../Images/image/sreemongol.png")}
              />
              <p className="bottom">Sreemongol</p>
            </Link>
          </Card>

          <Card>
            <Link to="/booking">
              <Card.Img
                className="hr"
                variant="top"
                src={require("../../Images/image/sundorbon.png")}
              />
              <p className="bottom">Sundarban</p>
            </Link>
          </Card>
        </CardDeck>
      </Container>
    </div>
  );
};

export default Destination;
