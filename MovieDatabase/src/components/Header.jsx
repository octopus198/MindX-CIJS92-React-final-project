import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <div className="header-nav">
        <Link to={"/"}>Home</Link>
        <Link to={"/movies"}>Movies</Link>
        <Link to={"/tvshows"}>TV Shows</Link>
        <Link to={"/mylist"}>My List</Link>
      </div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">The Movie Database</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#movies">Movies</Nav.Link>
              <Nav.Link href="#tvshows">TV Shows</Nav.Link>
              <Nav.Link href="#mylist">My List</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">User</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
