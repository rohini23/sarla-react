import React, { Component, Fragment } from "react";
import "../hero/Hero";
import Hero from "../hero/Hero";
import Overview from "../overview/Overview";
import HomeSection from "../home/home-section/HomeSection";
import QualityControl from "./qualityControl/QualityControl";
import OverviewDataLeft from "../overview/overviewData/OverviewDataLeft";
import OverviewDataRight from "../overview/overviewData/OverviewDataRight";
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
        <div className="overview">
          <Overview title="overview" titleClass="overview-title" />
          <div className="overview-content columns">
            <OverviewDataLeft>
              <p className="overview-data">
                With our head office in Mumbai, the commercial capital of India,
                our manufacturing and dyeing facilities are located in Silvassa
                and Vapi respectively, 160 kms north of Mumbai.
              </p>
              <p className="overview-data">
                Silvassa houses SPFL’s 2 manufacturing units, each near the
                other, as and when they were established in succession. These
                are vertically integrated plants which allow us to produce more
                than 250 different varieties of yarns and threads to satisfy the
                different market demands while maintaining the highest levels of
                production and quality standards.
              </p>
              <p className="overview-data">
                Each unit is designed to be a stand-alone facility to ensure
                continued service to our customers in case of any natural or
                manmade calamity.
              </p>
            </OverviewDataLeft>
            <OverviewDataRight>
              <p className="overview-data">
                Our dyeing facilities are situated in Vapi (Gujrat Industial
                Development corporation), 12 kms away from Silvassa, in an area
                set up by the government to handle chemical effluent discharge.
              </p>
              <p className="overview-data">
                With our own transportation facilities, we do not face any
                constraints in the movement of goods and can cater to customer’s
                orders within a short span of time. Our dyeing unit is equipped
                with state of the art technology right from computer shade
                matching for developing new colors to computer controlled dyeing
                machines which ensures that dyeing procedures are executed
                correctly each and every time.
              </p>
            </OverviewDataRight>
          </div>
        </div>
        <HomeSection
          className="quality-control is-mobile"
          contentName="quality-control-content"
          isFirst={true}
          heading="quality control & packaging"
          isContent4={true}
        >
          <div className="quality-control-content">
            <ul>
              <QualityControl
                data="A textile hub thereby ensures an ample supply of industry-trained
            labour."
              />
              <QualityControl data="100% physical inspection of finished products." />
              <QualityControl
                data="Customized packaging as per each customer’s requirements (Printed
            carton labels etc)."
              />
            </ul>
          </div>
        </HomeSection>
      </Fragment>
    );
  }
}

export default Facilitiess;
