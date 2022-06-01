import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Veg Garden Planner</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="select">Select</Nav.Link>
          <Nav.Link href="plan">Plan</Nav.Link>
          <Nav.Link href="diary">Diary</Nav.Link>
          <Nav.Link href="settings">Settings</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
