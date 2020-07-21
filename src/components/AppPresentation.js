import React from "react";
import codeWindow from "../img/Code Window.png";
import screen from "../img/Screen.png";
import heartIcon from "../img/Heart Icon.png";
import tagIcon from "../img/Tag Icon.png";
import caseIcon from "../img/Case Icon.png";
import pencilIcon from "../img/Pencil Icon.png";
import screens from "../img/3screens.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Paper from "./Paper";

export default function AppPresentation() {
  return (
    <div className="text-center text-lg-right" style={{ paddingTop: "10em" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">
            <h3>Stable and Ready</h3>
            <p className="soft-font py-5">
              Cras ultricies ligula sed magna dictum porta. Nulla porttitor
              accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula
              elementum sed sit amet dui. Curabitur aliquet quam id dui posuere
              blandit. Curabitur aliquet quam id dui posuere blandit. Vestibulum
              ac diam sit amet quam.
            </p>
            <button className="btn btn-primary py-2 px-3 mr-3">
              Download Free Today
            </button>
          </div>
          <div className="col py-5 py-lg-0">
            <img src={codeWindow} alt="Code Window" className="img-fluid" />
          </div>
        </div>
        <div
          className="d-none d-lg-block"
          style={{ paddingTop: "10rem" }}
        ></div>
        <div className="row">
          <div className="col-lg-5 d-none d-lg-block">
            <img
              src={screen}
              alt="Code Window"
              className="img-fluid"
              style={{ position: "relative", left: "0px", bottom: "-3rem" }}
            />
          </div>
          <div
            className="col offset-lg-1 justify-content-center text-left"
            style={{ minHeight: "480px" }}
          >
            <Paper icon={heartIcon} title="Made with love" />
            <Paper
              icon={tagIcon}
              title="Free of Use"
              content="Cras ultricies ligula sed magna dictum porta. Nulla
                        porttitor accumsan tincidunt. Vestibulum ac diam."
              highlighted
            />
            <Paper icon={caseIcon} title="Fully Support Avaliable" />
            <Paper icon={pencilIcon} title="Flat and Modern UI & UX" />
            {/* <div className="card my-3 card-shadow">
              <div className="card-body">
                <p className="card-text">
                  <div class="media">
                    <img class="mr-3" src={heartIcon} alt="Heart Icon" />
                    <div class="media-body">Made with love </div>
                  </div>
                </p>
              </div>
            </div>
            <div
              className="card my-3 card-shadow"
              style={{ backgroundColor: "#00fff0" }}
            >
              <div className="card-body">
                <p className="card-text">
                  <div class="media">
                    <img class="mr-3" src={tagIcon} alt="Tag Icon" />
                    <div class="media-body">
                      <p>Free of Use</p>
                      <p>
                        Cras ultricies ligula sed magna dictum porta. Nulla
                        porttitor accumsan tincidunt. Vestibulum ac diam.
                      </p>
                    </div>
                  </div>
                </p>
              </div>
            </div>
            <div className="card my-3 card-shadow">
              <div className="card-body">
                <p className="card-text">
                  <div class="media">
                    <img class="mr-3" src={caseIcon} alt="Case Icon" />
                    <div class="media-body">Fully Support Avaliable </div>
                  </div>
                </p>
              </div>
            </div>
            <div className="card my-3 card-shadow"> */}
            {/* <div className="card-body">
                <p className="card-text">
                  <div class="media">
                    <img class="mr-3" src={pencilIcon} alt="Pencil Icon" />
                    <div class="media-body">Flat and Modern Ui & Ux </div>
                  </div>
                </p>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="d-none d-lg-block" style={{ backgroundColor: "#f5f6fa" }}>
        <div className="container pt-5">
          <div className="row" style={{ paddingTop: "10rem" }}>
            <div className="col-12 col-lg-5">
              <h3>Everything You Need</h3>
              <p className="soft-font py-5">
                <p>
                  <span>
                    <FontAwesomeIcon icon={faCheckCircle} className="mx-2" />
                  </span>
                  Android
                </p>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faCheckCircle} className="mx-2" />
                  </span>
                  iPhone
                </p>
                Cras ultricies ligula sed magna dictum porta. Nulla porttitor
                accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula
                elementum sed sit amet dui. Curabitur aliquet quam id dui
                posuere blandit. Curabitur aliquet quam id dui posuere blandit.
                Vestibulum ac diam sit amet quam.
              </p>
            </div>
            <div className="col py-5 py-lg-0">
              <img
                src={screens}
                alt="Code Window"
                className="img-fluid"
                style={{
                  position: "absolute",
                  bottom: "-4em",
                  right: "0px",
                  zIndex: "0",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
