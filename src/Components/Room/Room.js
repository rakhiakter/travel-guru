import React from "react";
import { Container } from "react-bootstrap";

const Room = (props) => {
  const { imgUrl } = props;
  return (
    <Container>
      <Container>
        <div class="card mb-3" style={{ maxWidth: "540px" }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img
                className="card-img"
                src={require("../../Images/image/rectangle 26.png")}
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Hotel Sultan</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">
                    <b>Five Star</b>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3" style={{ maxWidth: "540px" }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img
                className="card-img"
                src={require("../../Images/image/rectangle 27.png")}
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Hotel Grand</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">
                    <b>Five Star</b>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3" style={{ maxWidth: "540px" }}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img
                className="card-img"
                src={require("../../Images/image/rectangle 28.png")}
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Hotel Paradaise</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">
                    <b>Five Star</b>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Room;
