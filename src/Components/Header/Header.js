import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <Container>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">
            <img
              style={{ width: "120.26px", height: "56px" }}
              src={logo}
              alt=""
            />
          </Navbar.Brand>
          <Form inline>
            <FormControl
              id="search"
              type="text"
              placeholder="Search your Destination..."
              className="mr-sm-2"
            />
          </Form>

          <Nav className="ml-auto">
            <Link className="nav-link" to="/news">
              News
            </Link>
            <Link className="nav-link" to="destination">
              Destination
            </Link>
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
            <Link className="nav-link" to="#pricing">
              Contact
            </Link>
            <Link className="nav-link" to="/login">
              <Button variant="warning">Login</Button>
            </Link>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
