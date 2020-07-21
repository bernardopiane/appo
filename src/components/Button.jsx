import React from "react";
// import { Link } from "react-router-dom";

export default function Button({
  paddingX,
  paddingY,
  marginRight,
  marginLeft,
  outlined,
  text,
}) {
  const classes = outlined ? "btn btn-outline-light" : "btn btn-primary";
  return (
    <button
      className={classes}
      style={{
        paddingLeft: paddingX,
        paddingRight: paddingX,
        paddingBottom: paddingY,
        paddingTop: paddingY,
        marginRight: marginRight,
        marginLeft: marginLeft,
      }}
    >
      {text}
    </button>
  );
}
