import React from "react";

export default function CompanyInfo() {
  return (
    <div style={{ backgroundColor: "#323a4d" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-1 col-sm-3 col-lg"></div>
          {/* <div className="col"></div> */}
          {/* <div className="col-1 d-none d-lg-block"></div> */}
          <div
            className="col"
            style={{ padding: "5rem", backgroundColor: "#f5f6fa" }}
          >
            <div className="row">
              <div className="col col-lg-8 justify-content-center">
                <h4>Get More From Your Smartphone</h4>
                <p className="soft-font">
                  Cras ultricies ligula sed magna dictum porta. Nulla porttitor
                  accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula
                  elementum sed sit amet dui. Curabitur aliquet quam id dui
                  posuere blandit. Curabitur aliquet quam id dui posuere
                  blandit. Vestibulum ac diam sit amet quam vehicula elementum
                  sed sit amet dui. Donec sollicitudin molestie malesuada. Donec
                  rutrum congue leo eget malesuada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
