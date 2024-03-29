import React from 'react';
import "./Navbar.css";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComp = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
          <Nav className="topnav">
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/album" className="nav-link">Album</Link>
          <Link to="/" className="active">Home</Link>
          </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;