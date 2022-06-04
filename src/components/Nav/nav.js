import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import {
      Link
} from "react-router-dom";
import './nav.css'


function Nav() {
    return (
      <div>
        <>
        <ReactBootstrap.Navbar collapseOnSelect expand="lg" sticky="top">
  <ReactBootstrap.Container>
  <ReactBootstrap.Navbar.Brand href="#home"><h1 class="title">Somaiah's Portfolio</h1></ReactBootstrap.Navbar.Brand>
  <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootstrap.Nav className="me-auto">
        <Link to="/">
        <ReactBootstrap.Nav.Link variant="light" href="#about"><button class="btn text-white" active>About</button></ReactBootstrap.Nav.Link>
        </Link>
      <Link to="/Projects">
      <ReactBootstrap.Nav.Link variant="light" href="#projects"><button class="btn text-white" active>Projects</button></ReactBootstrap.Nav.Link>
      </Link>
      <Link to="/Resume">
      <ReactBootstrap.Nav.Link variant="light" href="#resume"><button class="btn text-white" active>Resume</button></ReactBootstrap.Nav.Link>
      </Link>
      <Link to="/Contact">
      <ReactBootstrap.Nav.Link variant="light" href="#contact"><button class="btn text-white" active>Contact</button></ReactBootstrap.Nav.Link>
      </Link>      
    </ReactBootstrap.Nav>
  </ReactBootstrap.Navbar.Collapse>
  </ReactBootstrap.Container>
</ReactBootstrap.Navbar>
        </>
      </div>
    );

}

export default Nav;