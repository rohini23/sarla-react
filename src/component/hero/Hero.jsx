import React from "react";
import "./hero.css";
export default function Hero(props) {
  var { title, subtitle, titleClass, className, heroBodyClass } = props;
  return (
    <section
      className={"hero is-fullheight" + (className ? " " + className : "")}
    >
      <div className={"hero-body" + (heroBodyClass ? " " + heroBodyClass : "")}>
        <div className="container">
          <h1
            className={
              "title is-uppercase" + (titleClass ? " " + titleClass : "")
            }
          >
            {title}
          </h1>
          <h2 className="subtitle">{subtitle}</h2>
          {props.children}
        </div>
      </div>
    </section>
  );
}

// line no 12
// "title is-uppercase product-hero-heading" +
//               (titleClass ? " " + titleClass : "")
