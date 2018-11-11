import React, { Component } from "react";
import NavbarItem from "./navbar-item/navbar-item";
import Stock from "./stock/Stock";
import "./navbar.css";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { addStock } from "../../action/StockA";

// import Home from "../home/Home";
// import ProductPage from "../product-page/ProductPage";
// import Facilities from "../facilities-page/Facilities";
// import Event from "../events-page/Events";

class Navbar extends Component {
  state = {
    stock: this.props.stockList
  };
  componentDidMount() {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
    this.props.onaddStock();
    setTimeout(_ => {
      this.setState({ stock: this.props.stockList });
    }, 0);
  }
  render() {
    return (
      <header>
        <nav
          className={
            "navbar nav-padding is-fixed-top" +
            (this.props.className ? " " + this.props.className : "")
          }
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src="assets/images/logo/Logo.jpg" />
            </a>
            <a
              href="#fixme"
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Router>
                <React.Fragment>
                  <NavbarItem value="the company" has-dropdown>
                    <NavbarItem value="history and key milestones" />
                    <NavbarItem value="company profile" />
                    <NavbarItem value="board of directors" />
                    <NavbarItem value="vision & mision" />
                    <NavbarItem value="new ventures & future plans" />
                    <NavbarItem value="innovation @ SPFL" />
                    <NavbarItem value="quality policy" />
                  </NavbarItem>
                  <NavbarItem
                    value="global presence"
                    className="is-uppercase"
                  />
                  <NavbarItem to="/products" value="products" has-dropdown>
                    <NavbarItem
                      to="textured polyester Yarns"
                      value="textured polyester Yarns"
                    />
                    <NavbarItem
                      to="textured nylon stretch Yarns"
                      value="textured nylon stretch Yarns"
                    />
                    <NavbarItem to="Bulklon" value="Bulklon" />
                    <NavbarItem
                      to="textured sewing Thread"
                      value="textured sewing Thread"
                    />
                    <NavbarItem to="covered yarns" value="covered yarns" />
                    <NavbarItem
                      to="high tenacity Yarns"
                      value="high tenacity Yarns"
                    />
                  </NavbarItem>
                  <NavbarItem value="for investors" has-dropdown>
                    <NavbarItem value="from the desk of the managing directors" />
                    <NavbarItem value="investor information" />
                    <NavbarItem value="financial information" />
                    <NavbarItem value="press releases" />
                    <NavbarItem value="stock information" />
                    <NavbarItem value="investor contact" />
                    <NavbarItem value="corporate governance" />
                    <NavbarItem value="placement document" />
                    <NavbarItem value="notice for investor" />
                  </NavbarItem>
                  <a
                    className="navbar-item scroll-nav contact-us is-uppercase"
                    href="#contact-content"
                  >
                    contact us
                  </a>
                </React.Fragment>
              </Router>
            </div>
            <div className="navbar-end">
              <div className="navbar-item stoke">
                <ul>
                  <Stock stock={this.state.stock} />
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

React.forwardRef((props, ref) => {
  console.log("ref", props, ref);
});

const mapStateToProps = state => {
  return { stockList: state.stockList };
};

const mapActionToProps = {
  onaddStock: addStock
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(Navbar);
