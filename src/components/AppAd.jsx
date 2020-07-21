import React from "react";
import phone from "../img/2phones.jpg.png";
import playstore from "../img/PlayStore Btn.png";
import ios from "../img/iStore Btn.png";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function AppAd() {
  return (
    <div
      style={{
        backgroundColor: "#f5f6fa",
        paddingTop: "5em",
        paddingBottom: "5em",
      }}
    >
      <div className="container text-center text-lg-left">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <img src={phone} alt="Phone" />
          </div>
          <div className="col-12 col-lg-6 py-5 py-lg-0 d-flex justify-content-center flex-column">
            <h3>Now Avaliable</h3>
            <p className="soft-font py-4">
              Cras ultricies ligula sed magna dictum porta. Nulla porttitor
              accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula
              elementum sed sit amet dui. quam vehicula elementum sed sit
              ametsuada.
            </p>
            <div className="row justify-content-center justify-content-lg-start">
              <img className="mx-2" src={playstore} alt="Playstore Button" />
              <img className="mx-2" src={ios} alt="Apple Button" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="d-flex justify-content-center"
        style={{
          position: "relative",
          bottom: "-6.5em",
        }}
      >
        <Link to="/pricing">
          <Button paddingX="8rem" paddingY="1rem" text="GET THE APP TODAY" />
        </Link>
      </div>
    </div>
  );
}
