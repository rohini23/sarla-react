import React, { Component } from "react";
import SliderItem from "./slider-item/slider-item";
import "./slider.css";
import "../../../../node_modules/bulma-carousel/dist/css/bulma-carousel.min.css";
import bulmaCarousel from "../../../../node_modules/bulma-carousel/dist/js/bulma-carousel";
class Slider extends Component {
  componentDidMount() {
    this.carousel = bulmaCarousel.attach();
  }
  nextSlide = e => {
    var dotInd = e.target.getAttribute("num");
    var position = this.carousel[0].currentItem.node.getAttribute("position");
    let diff = dotInd - position;
    diff = diff < 0 ? 5 + diff : diff;
    for (let i = 0; i < diff; i++) {
      this.slider_right_handle.current.click();
    }
  };
  slider_right_handle = React.createRef();
  render() {
    return (
      <section className="hero slider is-fullheight has-carousel">
        <div className="hero-carousel carousel-animated carousel-animate-fade">
          <div className="carousel-container ">
            <SliderItem
              position={1}
              className="slider-first is-active"
              style={{ width: "100vw", height: "100vh" }}
            >
              <h1 className="title">
                <span className="welcome-break"> Welcome to</span> Sarla
                Performance Fibers Ltd.
              </h1>
              <h2 className="subtitle">TECHNOLOGY. INNOVATIONS. SOLUTIONS.</h2>
              <span>
                <span>Our yarns and threads form a deep, intrinsic </span>
                and invisible part of your everyday lives.
              </span>
            </SliderItem>
            <SliderItem
              position={2}
              className="slider-second"
              titleFirst="Engaged in"
              titleSecond="wind
                      power generation."
              subtitle="This venture is part of our environmental consciousness. The wind power generated is used captively for our dye house in Vapi."
            />
            <SliderItem
              position={3}
              className="slider-third"
              titleFirst="Our dyed nylon yarn is known"
              titleSecond="for its unique softness"
            />
            <SliderItem
              position={4}
              className="slider-fourth"
              titleFirst="Amongst the largest"
              titleSecond="manufacturing capacity in India"
              subtitle="for Twisted yarn and Air Covered and Conventional covered yarn"
            />
            <SliderItem
              position={5}
              className="slider-fifth"
              titleFirst="Most vertically integrated"
              titleSecond="Textured Sewing thread"
              titleThird="manufacturer in India"
            />
          </div>
          <div className="hero-foot is-fullwidth">
            <span className="dot" num={1} onClick={this.nextSlide} />
            <span className="dot" num={2} onClick={this.nextSlide} />
            <span className="dot" num={3} onClick={this.nextSlide} />
            <span className="dot" num={4} onClick={this.nextSlide} />
            <span className="dot" num={5} onClick={this.nextSlide} />
          </div>
          <div className="carousel-navigation is-overlay">
            <div className="carousel-nav-left">
              <i className="fa fa-chevron-left " aria-hidden={true} />
            </div>
            <div className="carousel-nav-right" ref={this.slider_right_handle}>
              <i className="fa fa-chevron-right " aria-hidden={true} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Slider;
