import React, { Component, Fragment } from "react";
import "./company-profile.css";
import Hero from "../hero/Hero";
import Overview from "../overview/Overview";
import OverviewDataLeft from "../overview/overviewData/OverviewDataLeft";
import OverviewDataRight from "../overview/overviewData/OverviewDataRight";
import HomeSection from "../home/home-section/HomeSection";
import QualityControl from "../facilities-page/qualityControl/QualityControl";
class CompanyProfile extends Component {
  render() {
    return (
      <Fragment>
        <Hero
          title="Company profile"
          className="events-hero"
          titleClass="events-title"
        />
        <div className="overview profile-overview">
          <Overview title="overview" titleClass="overview-title" />
          <div className="overview-content columns">
            <OverviewDataLeft>
              <p className="overview-data">
                An ISO 9001:2008 Certified Company, Sarla Performance Fibers
                Limited (formerly known as Sarla Polyester Limited) is a 100%
                EOU engaged in the manufacturing and export of polyester and
                nylon textured, twisted and dyed yarns, covered yarns, high
                tenacity yarns and sewing thread. Beginning as a manufacturer of
                commodity yarns, the company has successfully shifted its focus
                and established itself as a manufacturer of specialized and
                higher value added yarns. Our strength lies in customizing the
                product as per each individual customer’s requirements and
                specifications.
              </p>
              <p className="overview-data">
                Visit Our Products for a range of our offerings.
              </p>
              <p className="overview-data">
                Over the years SPFL has expanded its activities with the
                expansion and upgradation of existing facilities in India, as
                well as through creation of new facilities overseas with the
                primary objective of establishing closeness to customers to
                provide quick and efficient services to them. With clients in
                all major countries across the globe & a presence in key
                international locations, SPFL has developed a strong customer
                base See Global Presence.
              </p>
            </OverviewDataLeft>
            <OverviewDataRight>
              <p className="overview-data">
                Today, the company is run by its promoters, Mr Madhusudhan
                Jhunjhunwala, the current Chairman and Mr. Krishna Jhunjhunwala,
                the Managing Director. The company’s head office is located in
                Mumbai, India and its manufacturing facilities are situated 160
                km outside Mumbai in Silvassa and Vapi. See manufacturing
                facilities for more details.
              </p>
              <p className="overview-data">
                A close-knit family-run business, with a professional approach
                in all its business endeavours enhanced with a long standing
                market presence and promoter expertise, SPFL enjoys the promise
                of credibility, sustainability and growth.
              </p>
            </OverviewDataRight>
          </div>
        </div>
        <HomeSection
          className="quality-policy is-mobile"
          contentName="quality-policy-content"
          isFirst={true}
          heading="quality policy"
          subheading="certification & compliance"
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

export default CompanyProfile;
