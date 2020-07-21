import React from "react";
// import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const linkColor = {
  color: "white",
};

export default function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "#223047",
        color: "white",
        borderBottom: "1px solid rgba(255, 255, 255, 0.25)",
      }}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-2">
          <div style={{ fontSize: "2em", color: "lightblue" }}>appo</div>
          <div className="d-none d-md-flex align-items-center">
            {/* <Dropdown className="px-0">
              <Dropdown.Toggle
                variant="link"
                id="dropdown-basic"
                style={linkColor}
              >
                Home
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
            <Link to="/" className="px-2" style={linkColor}>Home</Link>
            <Link to="/features" className="px-2" style={linkColor}>Features</Link>
            <Link to="/pricing" className="px-2" style={linkColor}>Pricing</Link>
          </div>
          <div className="d-flex align-items-center">
            <button
              className="btn btn-primary px-4"
              style={{
                color: "#233148",
                backgroundColor: "#00fff0",
                borderColor: "#00fff0",
              }}
            >
              Get the App
            </button>
            {/* <div className="pl-3">Menu</div> */}
          </div>
          
        </div>
      </div>
    </div>
  );
}
