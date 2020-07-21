import React from "react";
import vid from "../video/girl.mp4";

export default function Video() {
  return (
    <div
      className="section-padding"
      style={{
        zIndex: "5",
        backgroundColor: "#223047",
        position: "relative",
        color: "#f5f6fa",
      }}
    >
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col">
            <h3 className="pb-3">App Preview</h3>
            <video controls style={{ width: "100%" }}>
              <source src={vid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
