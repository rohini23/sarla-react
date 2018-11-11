import React from "react";
export default function Event(props) {
  var { title, date, data } = props;
  return (
    <div class="column is-4-desktop event-description">
      <h2>{title}</h2>
      <h6>{date}</h6>
      <p>{data}</p>
      {props.children ? props.children : ""}
    </div>
  );
}
