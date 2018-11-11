import React, { Component } from "react";
import Table from "./tables/Tables";
import Description from "./description/Description";
import "./Detail.css";

import { connect } from "react-redux";

import { addProductDetails } from "../../../../action/ProductDetailA";
class Detail extends Component {
  state = {
    details: []
  };
  componentDidMount() {
    this.props.onAddProductDetails();
    setTimeout(_ => {
      return this.setState({ details: this.props.productDetail });
    }, 0);
  }
  render() {
    let { scrollClass, closeClass } = this.props;
    return (
      <div className={"scroll-bar " + (scrollClass ? scrollClass : "")}>
        <div className="close-btn" onClick={this.props.onClose}>
          <a href="#fixme" className="button is-white is-uppercase">
            close
            <i className="fas fa-times" />
          </a>
        </div>
        <div className=" details ">
          {this.props.current}
          <Description
            details={this.state.details[this.props.current]}
            className={closeClass}
          />
          {/* <Description
            heading="applications"
            className={"applications " + closeClass + "2"}
          >
            <li>Sewing Thread</li>
            <li>Furniture Upholstery</li>
            <li>Automotive Upholstery</li>
            <li>Narrow Fabrics and Tapes and more</li>
          </Description>
          <Description
            heading="available in"
            className={"available " + closeClass + "3"}
          >
            <li>Raw white, Twisted raw white, Twisted raw white on dye </li>
            <li>tubes, Textured dyed, Twisted dyed, Twisted - 60 TPM</li>
            <li>onwards, Batch sizes : From 5KG - 400KG</li>
          </Description> */}
          <Table closeClass={closeClass} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { productDetail: state.productDetail };
};

const mapActionToProps = {
  onAddProductDetails: addProductDetails
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(Detail);
