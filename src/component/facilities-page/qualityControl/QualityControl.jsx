import React from "react";
import "./qualityControl.css";
export default function QualityControl(props) {
  var { data } = props;
  return (
    <li>
      <i className="qc-dash" />
      <p>{data}</p>
    </li>
  );
}
