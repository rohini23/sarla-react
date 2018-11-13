import React from "react";
import "./overview.css";
export default function Overview(props) {
  var { title, titleClass } = props;
  return (
    <h1
      className={"h1 title is-uppercase" + (titleClass ? " " + titleClass : "")}
    >
      {title}
    </h1>
  );
}
