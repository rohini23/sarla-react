import React, { Component } from "react";
import Detail from "./detail/Detail";
import ProductList from "./product-lists/ProductList";
import "./ProductDetail.css";
import { BrowserRouter as Router } from "react-router-dom";
// ----------------action Connect---------------------------
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { addProductList } from "../../../action/ProductListsA";
class ProductDetail extends Component {
  state = {
    scrollClass: "",
    closeClass: "",
    current: 4,
    productList: this.props.productList,
    bg: []
  };

  upProduct = _ => {
    if (this.state.current === 0) return;
    var temp = this.state.current;
    this.setState({
      productList: this.state.productList.map((elem, ind) => {
        return ind === this.state.current
          ? {
              bg: elem.bg,
              to: elem.to,
              value: elem.value,
              className: "deactive"
            }
          : ind === this.state.current - 1
            ? {
                bg: elem.bg,
                to: elem.to,
                value: elem.value,
                className: "active"
              }
            : elem;
      })
    });
    this.setState({ current: --temp });
  };

  downProduct = _ => {
    if (this.state.current + 1 === this.state.productList.length) return;
    var temp = this.state.current;
    this.setState({
      productList: this.state.productList.map((elem, ind) => {
        return ind === this.state.current
          ? {
              bg: elem.bg,
              to: elem.to,
              value: elem.value,
              className: "deactive"
            }
          : ind === this.state.current + 1
            ? {
                bg: elem.bg,
                to: elem.to,
                value: elem.value,
                className: "active"
              }
            : elem;
      })
    });
    this.setState({ current: ++temp });
  };

  onClickDetails = _ => {
    this.setState({ scrollClass: "active" });
    this.setState({ closeClass: "det-animate-" });
  };

  onClickCloseDetails = _ => {
    this.setState({ scrollClass: "" });
    this.setState({ closeClass: "" });
  };

  componentDidMount() {
    this.props.onAddProductList();
    setTimeout(_ => {
      this.setState({ productList: this.props.productList });
      this.productBg();
    }, 0);
  }

  productBg() {
    this.setState({
      bg: this.state.productList.map((elem, ind) => {
        return elem.bg;
      })
    });
  }

  render() {
    let bg = this.state.productList[this.state.current]
      ? this.state.productList[this.state.current][`bg`]
      : "";
    return (
      <section
        className="prod-details is-fullheight"
        style={{
          backgroundColor: bg
        }}
      >
        <Detail
          onClose={this.onClickCloseDetails}
          scrollClass={this.state.scrollClass}
          closeClass={this.state.closeClass}
          current={this.state.current}
        />
        <div className="wrapper">
          <div className="list is-start">
            <span className="icon prod-up-arrow">
              <i
                className="far fa-arrow-alt-circle-up"
                onClick={this.upProduct}
              />
            </span>
            <ul className="prod-list-ul">
              <Router>
                <React.Fragment>
                  <ProductList list={this.state.productList} />
                </React.Fragment>
              </Router>
            </ul>
            <span className="icon prod-down-arrow">
              <i
                className="fas fa-arrow-alt-circle-down"
                onClick={this.downProduct}
              />
            </span>
          </div>
          <div className="det-btn" target="prod-details">
            <a
              href="#fixme"
              className="button is-primary is-inverted is-outlined is-uppercase is-center"
              onClick={this.onClickDetails}
            >
              details
              <i className="fas fa-arrow-right det-arrow" />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

function addClassToproductList(productList) {
  productList.map((list, ind) => {
    return list.className
      ? list
      : ind === 4
        ? (list.className = "active")
        : (list.className = "deactive");
  });
  // productList.map((list, ind) => {
  //   console.log(list);
  //   return ind === 4 ? ((list.className = "active"), list) : list;
  // });
  return productList;
}

const productSelector = createSelector(
  state => state.productList,
  productList => addClassToproductList(productList)
);

const mapStateToProps = state => {
  return { productList: productSelector(state) };
};

const mapActionToProps = {
  onAddProductList: addProductList
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(ProductDetail);
