import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../img/logo.webp";
import "./NavigationBar.scss";
import "../LandingPage.css";
import Register from "../img/registers.png";

const NavigationBar = () => {
  return (  
    <div className="custom-nav my-2">
      <Navbar collapseOnSelect bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="logo" />
            <span>Gabungin</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/home">Beranda</Nav.Link>
              <Nav.Link href="/features">fitur</Nav.Link>
              <Nav.Link href="/testimoni">Testimoni</Nav.Link>
              <Nav.Link href="/about">Tentang Kami</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/register">
                <button className="sign-up-button">
                  <img src={Register} alt="user" />
                  Daftar
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
