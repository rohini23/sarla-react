import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { createSelector } from "reselect";
class NavbarItem extends Component {
  // contact
  handelContact = event => {
    // let target = this.props.target.current;
    // console.log(target);
    // this.props.value === "contact us"
    //   ? target.scrollIntoView({
    //       behavior: "instant",
    //       block: "end",
    //       inline: "nearest"
    //     })
    //   : event.preventDefault();
  };
  render() {
    if (!this.props.value) throw Error("NavbarItem:Value is required");
    if (this.props["has-dropdown"]) {
      if (!this.props["children"])
        throw Error(
          "NavbarItem:children is required with has-dropdown attribute"
        );
      return (
        <div className="navbar-item has-dropdown is-hoverable">
          <Link
            to={this.props.to ? this.props.to : "/"}
            className="navbar-link is-uppercase"
            href="#fixme"
          >
            {this.props.value}
          </Link>
          <div className="navbar-dropdown nav-dropdown is-boxed is-capitalized">
            {this.props.children}
          </div>
        </div>
      );
    } else {
      var { value, to, className, ...rest } = this.props;
      return (
        <Link
          // onClick={this.handelContact}
          to={to ? to : "/"}
          className={"navbar-item" + (className ? " " + className : "")}
          {...rest}
        >
          {value}
        </Link>
      );
    }
  }
}
// const Selector = createSelector(state => state.passTarget, target => target);
// const mapStateToProps = state => {
//   return { target: Selector(state) };
// };
// export default connect(
//   mapStateToProps,
//   null
// )(NavbarItem);
export default NavbarItem;
