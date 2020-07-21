import React from "react";

export default function Paper({ icon, title, content, highlighted }) {
  if (highlighted) {
    return (
      <div
        className="card my-3 card-shadow"
        style={{ backgroundColor: "#00fff0" }}
      >
        <div className="card-body">
          <p className="card-text">
            <div class="media">
              <img class="mr-3" src={icon} alt="Tag Icon" />
              <div class="media-body">
                <p>{title}</p>
                <p>{content}</p>
              </div>
            </div>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="card my-3 card-shadow">
      <div className="card-body">
        <p className="card-text">
          <div class="media">
            <img class="mr-3" src={icon} alt="Heart Icon" />
            <div class="media-body">{title} </div>
          </div>
        </p>
      </div>
    </div>
  );
}
