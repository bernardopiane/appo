import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Download() {
  return (
    <div className="section-padding container">
      <div className="row justify-content-center text-center">
        <div className="col col-lg-8">
          <h4>Join The Thousands of satisfied users</h4>
          <p className="soft-font py-4">It’s just a few clicks away</p>
          <Link to="/pricing">
            {/* <div className="btn btn-primary px-4">DOWNLOAD</div> */}
            <Button text="DOWNLOAD" paddingX="2rem" />
          </Link>
        </div>
      </div>
    </div>
  );
}
