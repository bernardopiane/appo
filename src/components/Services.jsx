import React from "react";
import Icon1 from "../img/Icon.png";
import Icon2 from "../img/Icon2.png";
import Icon3 from "../img/Icon3.png";
import Icon4 from "../img/Icon4.png";
import Card from "./Card";

// const borderStyle = {
//   borderRadius: "15px",
//   boxShadow: "rgba(234, 234, 234, 0.5) 0px 0px 5px 0px",
// };

export default function Services() {
  return (
    <div
      className="container"
      style={{ paddingTop: "10em", textAlign: "center" }}
    >
      <div className="row justify-content-center">
        <div className="col-6">
          <h3>Everything needed to power your app brend online</h3>
          <div
            style={{
              display: "inline-block",
              width: "20%",
              borderBottom: "1px solid #00fff0",
              padding: "2.5em",
            }}
          ></div>
        </div>
      </div>
      <div className="row" style={{ paddingTop: "5em", paddingBottom: "5em" }}>
        <Card
          icon={Icon1}
          title="Modern Flat Design"
          content="Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Vestibulum ac diamdo."
        />
        <Card
          icon={Icon2}
          title="First 7 Days Free"
          content="Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Vestibulum ac diamdo."
        />
        <Card
          icon={Icon3}
          title="Fully Support"
          content="Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Vestibulum ac diamdo."
        />
        <Card
          icon={Icon4}
          title="User Friendly"
          content="Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Vestibulum ac diamdo."
        />
        {/* <div className="col-12 col-md-6 col-lg-3 py-3">
          <div className="p-3" style={borderStyle}>
            <img src={Icon1} alt="Icon 1" />
            <h4 className="py-4">Modern Flat Design</h4>
            <p className="soft-font">
              Cras ultricies ligula sed magna dictum porta. Nulla porttitor
              accumsan tincidunt. Vestibulum ac diamdo.
            </p>
          </div>
        </div> */}
        {/* <div className="col-12 col-md-6 col-lg-3 py-3">
          <div className="p-3" style={borderStyle}>
            <img src={Icon2} alt="Icon 1" />
            <h4 className="py-4">First 7 Days Free</h4>
            <p className="soft-font">
              Cras ultricies ligula sed magna dictum porta. Nulla porttitor
              accumsan tincidunt. Vestibulum ac diamdo.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 py-3">
          <div className="p-3" style={borderStyle}>
            <img src={Icon3} alt="Icon 1" />
            <h4 className="py-4">Fully Support</h4>
            <p className="soft-font">
              Cras ultricies ligula sed magna dictum porta. Nulla porttitor
              accumsan tincidunt. Vestibulum ac diamdo.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 py-3">
          <div className="p-3" style={borderStyle}>
            <img src={Icon4} alt="Icon 1" />
            <h4 className="py-4">User Friendly</h4>
            <p className="soft-font">
              Cras ultricies ligula sed magna dictum porta. Nulla porttitor
              accumsan tincidunt. Vestibulum ac diamdo.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
