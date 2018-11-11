import React, { Fragment } from "react";
export default function SliderItem(props) {
  return (
    <div
      className={
        "carousel-item has-background slider-item" +
        (props.className ? " " + props.className : "")
      }
      style={props.style ? props.style : {}}
      position={props.position}
    >
      {props.className.match("slider-first") ? (
        <img
          className="is-background"
          src="/assets/images/slider1.jpg"
          alt=""
        />
      ) : (
        <Fragment />
      )}
      <div className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            {props.className.match("slider-first") ? (
              props.children
            ) : (
              <Fragment>
                <h1 className="title">
                  <span>{props.titleFirst}</span>
                  {props.titleThird ? (
                    <Fragment>
                      <span>{props.titleSecond}</span>
                      <span>{props.titleThird}</span>
                    </Fragment>
                  ) : (
                    props.titleSecond
                  )}
                </h1>
                <h2 className="subtitle">{props.subtitle}</h2>
              </Fragment>
            )}
            <a
              href="#fixme"
              className="button explore-btn is-centered is-uppercase"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
