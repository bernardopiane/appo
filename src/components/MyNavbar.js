import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Button from "./Button";
// import Navbar from "./BackuipNavbar";

const linkStyle = { color: "white" };

export default function MyNavbar() {
  return (
    <Navbar
      variant="dark"
      expand="md"
      style={{
        backgroundColor: "#223047",
        color: "white",
        borderBottom: "1px solid rgba(255, 255, 255, 0.25)",
      }}
    >
      <div className="container d-flex">
        <Navbar.Brand>Appo</Navbar.Brand>
        <Nav
          className="d-flex d-md-none"
          style={{ marginLeft: "auto", marginRight: "1rem" }}
        >
          <div className="d-flex align-items-center">
            <Button paddingX="2rem" text="Get the App" />
            {/* <button
              className="btn btn-primary px-4"
              style={{
                color: "#233148",
                backgroundColor: "#00fff0",
                borderColor: "#00fff0",
              }}
            >
              Get the App
            </button> */}
          </div>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav className="nav-link">
              <Link to="/" className="px-2" style={linkStyle}>
                Home
              </Link>
            </Nav>
            <Nav className="nav-link">
              <Link to="/features" className="px-2" style={linkStyle}>
                Features
              </Link>
            </Nav>
            <Nav className="nav-link">
              <Link to="/pricing" className="px-2" style={linkStyle}>
                Pricing
              </Link>
            </Nav>

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                          Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown> */}
          </Nav>
          <Nav>
            <div className="d-none d-md-flex align-items-center">
              <Button paddingX="2rem" text="Get the App" />
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
