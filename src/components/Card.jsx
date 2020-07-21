import React from "react";

const borderStyle = {
  borderRadius: "15px",
  // #f9f9f9
  // boxShadow: "rgba(234, 234, 234, 0.5) 0px 0px 5px 0px",
  boxShadow: "rgba(223, 223, 223, 0.5) 0px 0px 5px 0px",
};

export default function Card({ icon, title, content }) {
  return (
    <div className="col-12 col-md-6 col-lg-3 py-3">
      <div className="p-3" style={borderStyle}>
        <img src={icon} alt={title} />
        <h4 className="py-4">{title}</h4>
        <p className="soft-font">{content}</p>
      </div>
    </div>
  );
}
