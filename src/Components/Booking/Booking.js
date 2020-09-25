import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import About from "../About/About";
import BookForm from "../BookForm/BookForm";

const Booking = () => {
  let { place } = useParams();
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6}>
            {place === "sajek" && (
              <div>
                <h1>Sajek Valley</h1>
                <p>
                  Sajek Valley is an emerging tourist spot in Bangladesh
                  situated among the hills of the Kasalong range of mountains in
                  Sajek union, Baghaichhari Upazila in Rangamati District.[1]
                  The valley is 1,476 feet (450 m) above sea level.[2] Sajek
                  valley is known as the Queen of Hills & Roof of Rangamati.
                </p>
              </div>
            )}

            {place === "sreemongol" && (
              <div>
                <h1> Sreemangal, The Tea Capital of Bangladesh</h1>
                <p>
                  Sreemangal is a hilly area covered with tea estates. There are
                  47 tea gardens in Sreemangal. A large portion of world’s
                  highest quality tea is grown here. It is also called the city
                  of ‘two leaves and a bud. Sreemangal is famous for nature,
                  forests and wildlife.
                </p>
              </div>
            )}

            {place === "sundorbon" && (
              <div>
                <h1>Sundarban</h1>
                <p>
                  The Sundarbans Ecosystem contains diverse flora and fauna is
                  about 10,000 Sq. km of which roughly 60% lies in the
                  south-west of Bangladesh is the world’s largest 35 species
                  true tidal mangrove forest adapted aerial roots breath taking
                  for respiration where living faunal diversity plays an
                  important role in mangrove ecosystem. The Sundarbans is the
                  magnificent rich wildlife conservation including Royal Bengal
                  Tiger habitation area of local and global valued.
                </p>{" "}
              </div>
            )}
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
