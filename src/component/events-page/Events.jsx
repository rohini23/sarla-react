import React, { Component, Fragment } from "react";
import "./events.css";
import Hero from "../hero/Hero";
import Event from "./event/Event";
import Btn from "../Btn/Btn";
import Modal from "../Modal/Modal";
import OverviewDataLeft from "../facilities-page/overview/overviewData/OverviewDataLeft";
import OverviewDataRight from "../facilities-page/overview/overviewData/OverviewDataRight";
class Events extends Component {
  state = {
    showModal: false
  };
  // keyup = e => {
  //   console.log("=========", e);
  //   e
  //     ? this.setState({ showModal: false })
  //     : this.setState({ showModal: true });
  // };
  escFunction(event) {
    console.log(event);
    if (event.keyCode === 27) {
    }
  }
  componentDidMount() {
    console.log("--->");
    document.addEventListener("keypress", this.escFunction, false);
  }
  render() {
    return (
      <Fragment>
        <Hero
          title="news & events"
          className="events-hero"
          titleClass="events-title"
        />
        <section className="events-section">
          <div className="container event-content">
            <h1 className="title is-capitalized">recent events</h1>
            <div className="events columns">
              <Event
                title="Awarded as “The Best EOU” by EPCES"
                date="30th November 2015"
                data="SARLA was awarded The EPCES [Export Promotion Council for
                 EOU & SEZs] Award for “The Best EOU (other than MSME) unit” 
                 under SEEPZ-SEZ in the product group category, Textile and 
                 Textile Products for its outstanding Export Performance in
                  the year 2012-2013."
              >
                <a
                  className="button events-read-more-btn is-capitalized"
                  onClick={() => this.setState({ showModal: true })}
                >
                  read more
                </a>
              </Event>
              <Event
                title="SME Business Excellence Award winner"
                date="23th November 2015"
                data="Sarla Performance Fibers Limited is once again, proudly
             recognised at the SME Business Excellence Awards hosted in New
              Delhi on November 23rd 2015. The company won the award in the
               Textiles & Garments- Mid Corporate Sector for the year 2015"
              />
              <Event
                title="SPFL Q3 FY2015
            Earnings conference
            call"
                date="18th February 2015"
                data="Sarla Performance Fibers Limited Q4 & FY2013 Earnings 
            Conference Call conducted on Wednesday,18th Feb 2015 at 1:30 pm IST.
            Conference Call Invite.
            Conference Call Text Transcript."
              />
              <Event
                title="Best Global Business Award winner"
                date="24th November 2014"
                data="Sarla Performance Fibers Limited is the proud winner of 
            the BEST GLOBAL BUSINESS AWARD 2014 at the SME Business Excellence
             Awards hosted in New Delhi on November 24th. 2014. This initiative
              was launched by The Times Group, Federal Bank and Dun &…"
              >
                <a
                  className="button events-read-more-btn is-capitalized"
                  onClick={() => this.setState({ showModal: true })}
                >
                  read more
                </a>
              </Event>
              <Event
                title="Governer of South Carolina Nikki Haley, in Mumbai"
                date="19th November 2014"
                data="Sarla Performance Fibers Limited is once again, proudly 
            recognised at the SME Business Excellence Awards hosted in New
             Delhi on November 23rd. 2015. The company won the award in the
              Textiles & Garments- Mid corporate sector for the year 2015."
              />
              <Event
                title="New Director on the board of SPFL"
                date="September 2014"
                data="Mr. Parantap Dave has joined SPFL’s Board of Directors 
            as an Additional Director with effect from September, 2014."
              />
            </div>
            <div className="load-more-btn-wrapper">
              <a
                className={"button is-uppercase events-load-more-btn"}
                // onClick={() => this.setState({ showModal: true })}
              >
                load more
              </a>
            </div>
          </div>
        </section>
        {this.state.showModal && (
          <Modal>
            <div
              className="close-btn modal-close-btn"
              onClick={() => this.setState({ showModal: false })}
            >
              <a href="#fixme" className="button is-white is-uppercase">
                close
                <i className="fas fa-times" />
              </a>
            </div>
            <h2 className="modal-subtitle">
              Awarded as “The Best EOU” by EPCES
            </h2>
            <span className="modal-date">30th November 2015</span>
            <div className="columns modal-content-wrapper">
              <OverviewDataLeft className="left">
                <div className="overview-data-left column is-6-desktop is-6-tablet">
                  <p className="overview-data">
                    Sarla Performance Fibers (SPFL) reported significant
                    improvement in Consolidated Q1 EPS of Rs. 7.89 on the back
                    of 53% increase in sales, excluding sales of traded goods
                    last year in Q1. Most of the sales increase was driven by
                    export of value added high tenacity nylon and polyester
                    yarns. SPFL sales volume rose 29% and average selling price
                    by 11% during the quarter. Savitex, a joint venture company
                    of SPFL in Central America also supported this growth by
                    increasing its revenue by 38%.
                  </p>
                  <p className="overview-data">
                    Commenting on this Q1 performance, SPFL’s MD Mr Krishna
                    Jhunjhunwala said “We are not surprised by this earnings
                    growth in Q1 and barring unforeseen situation expect a
                    healthy growth in the coming quarters due to addition of big
                    new clients, sourcing arrangements with dedicated buyers in
                    Turkey and Portugal and increased production from company’s
                    high tenacity nylon yarn plant.” He also mentioned that
                    “demand in Europe and US market continues to remain under
                    pressure but that has increased the scope of low cost
                    outsourcing and SPFL is well positioned to benefit from the
                    same. Current situation in Europe and US also presents the
                    company to carry out strategic buyouts and partnerships to
                    increase its sales further in these markets and reach large
                    customers directly.
                  </p>
                </div>
              </OverviewDataLeft>
              <OverviewDataRight className="right">
                <div className="overview-data-right column is-6-desktop is-6-tablet">
                  <p className="overview-data">
                    SPFL has cash of Rs 76m and working capital debt of Rs258m
                    at the end of Q1. Company’s book value stood at Rs 113 per
                    share at the end of Q1, an increase of 4% over FY10. SPFL
                    continued to monitor foreign exchange situation and does not
                    foresee any major threats on this front due to its natural
                    hedge of imported raw material. Last year, SPFL invested in
                    wind power capacity of 1.250 MW by spending Rs63m. This
                    year, depending upon the cash surplus and attractiveness of
                    the returns it will consider investing fresh funds in wind
                    power. In core business, the CAPEX needs are limited and are
                    unlikely to exceed Rs25m (other than new factory building)
                    this year.
                  </p>
                  <p className="overview-data">
                    About Sarla Performance Fibers Ltd SPFL is a leading
                    exporter of high tenacity polyester and nylon yarns, having
                    plants in India (Vapi, Silvassa) and Central America
                    (through JV in Honduras). Over the last 15 years, SPFL has
                    exported yarns worth Rs 5.75bn. In FY10 SPFL achieved
                    revenue of Rs 1.31bn, cash profit of Rs 0.17bn and paid a
                    dividend of Rs3.5 per share. SPFL is promoted by Madhusudan
                    Jhunjhunwala and Krishna Jhunjhunwala. The Jhunjhunwala
                    family holds 63% in SPFL and the balance is held by public.
                    SPFL stock has a face value of Rs10 and is listed on the
                    Bombay Stock Exchange and the National Stock Exchange with a
                    market capitalization of Rs 850mn as on 12 August, 2010.
                  </p>
                </div>
              </OverviewDataRight>
            </div>
          </Modal>
        )}
      </Fragment>
    );
  }
}

export default Events;
