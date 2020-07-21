import React from "react";
import phone from "../img/Vector Smartphone.png";
import Button from "./Button";
export default function Header(props) {
  return (
    <div>
      <div style={{ backgroundColor: "#223047", color: "white" }}>
        {props.children}
        <div className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col">
                <h3>Choose a better way to represent your app</h3>
                <p className="py-5">
                  Cras ultricies ligula sed magna dictum porta. Nulla porttitor
                  accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula
                  elementum sed sit amet dui. Curabitur aliquet quam id dui
                  posuere.
                </p>
                <div className="d-flex">
                  <Button text="Download Free Today" paddingX="1rem" />
                  <Button
                    text="Reach Out To Us"
                    paddingX="1rem"
                    marginLeft="1rem"
                    outlined
                  />
                  {/* <button className="btn btn-outline-light py-2 px-3 ml-3">
                    Reach Out To Us
                  </button> */}
                </div>
              </div>
              <div className="col d-none d-md-block">
                <img
                  src={phone}
                  alt="phone"
                  style={{
                    position: "absolute",
                    bottom: "-14em",
                    right: "3em",
                    filter: "drop-shadow(0px 0px 50px rgba(0, 255, 241, 0.2))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
