import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
  Button,
} from "react-bootstrap";
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
            <Nav.Link href="#home">News</Nav.Link>
            <Nav.Link href="#features">Destination</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Button variant="warning">Login</Button>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
