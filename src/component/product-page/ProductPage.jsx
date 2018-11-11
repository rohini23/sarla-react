import React, { Component, Fragment } from "react";
import ProductDetail from "./product-details/ProductDetail";
import Hero from "../hero/Hero";
import NeedInfo from "./need-info/NeedInfo";
import HomeSection from "../home/home-section/HomeSection";
import NicheSectorData from "../product-page/NicheSectorData/NicheSectorData";
import Btn from "../Btn/Btn";
import "./ProductPage.css";
class ProductPage extends Component {
  render() {
    return (
      <Fragment>
        <Hero
          className="product-page"
          heroBodyClass=" prod-hero-content"
          titleClass="product-hero-heading"
          title="product range"
          subtitle="Engineered & designed to provide solutions."
        >
          <div className="prod-hero-btn">
            <Btn
              value="products"
              link="#fixme"
              className="explore-blue-btn margin-top-contact is-capitalized"
            />
          </div>
        </Hero>
        <ProductDetail />
        <NeedInfo
          title="Need further information?"
          subtitle="For our product portfolio or a specific product inquiry, please email
        us at "
          email="neha@sarlafibers.com"
        >
          <h2 className="subtitle furter-info-visit-here">
            For <b>Niche Sector</b> applications visit{" "}
            <a rel="stylesheet" href="#fixme">
              here
            </a>
          </h2>
        </NeedInfo>
      </Fragment>
    );
  }
}

export default ProductPage;
