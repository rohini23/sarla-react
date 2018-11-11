import React, { Component, Fragment } from "react";
import "../hero/Hero";
import Hero from "../hero/Hero";
import Overview from "./overview/Overview";
import HomeSection from "../home/home-section/HomeSection";
import QualityControl from "./qualityControl/QualityControl";
import "./facilities.css";
class Facilitiess extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Hero
          className="facilities-page"
          titleClass="facilities-hero-heading"
          title="manifacturing facilities"
          subtitle="An expertise in yarn manufacturing, our flexible yet robust infrastructure allows us to process customized orders ranging from a few hundred to several thousand kgs."
        />
        <Overview title="overview" titleClass="overview-title" />
        <HomeSection
          className="quality-control is-mobile"
          contentName="quality-control-content"
          isFirst={true}
          heading="quality control & packaging"
          isContent4={true}
        >
          <QualityControl />
        </HomeSection>
      </Fragment>
    );
  }
}

export default Facilitiess;
