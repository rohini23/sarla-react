import React from "react";
import "./Description.css";

export default function Description(props) {
  if (!props.details) return <div />;
  let keys = Object.keys(props.details);
  return keys.map((key, ind) => {
    return (
      <div
        key={ind}
        className={
          "detail det-none " +
          key +
          " " +
          (props.className ? props.className : "") +
          (ind + 1)
        }
      >
        <h1 className="subtitle is-6 is-uppercase details-heading">
          {key === "available" ? key + " in" : key}
        </h1>
        {props.details[key] instanceof Array ? (
          <ul>
            {props.details[key].map((data, ind) => {
              return <li key={ind}>{data}</li>;
            })}
          </ul>
        ) : (
          <p>{props.details[key]}</p>
        )}
      </div>
    );
  });
}
// (props.className ? " " + props.className : "")
// if (!props.heading)
//   throw Error(
//     "product-->product-detail-->detail --> description --> decription.jsx Decription not set"
//   );
