import React, { Component } from "react";
import "./homeSection.css";

// -----------------------------------------------------------------------
// import { connect } from "react-redux";
// import { passTarget } from "../../../action/SetTargetA";

class HomeSection extends Component {
  // contactref = React.createRef();
  componentDidMount() {
    // this.props.onPassTarget(this.contactref);
  }
  render() {
    let {
      isFirst,
      isLast,
      heading,
      subheading,
      className,
      contentName,
      imgIs4,
      isContent4,
      id
    } = this.props;

    return (
      <section
        // ref={contentName === "contact-content" ? this.contactref : ""}
        className={"columns" + (className ? " " + className : "")}
        id={id ? id : ""}
      >
        {isFirst ? (
          <div className={"column img" + (imgIs4 ? " is-4" : "")} />
        ) : (
          ""
        )}
        <div
          className={
            "column" +
            (contentName ? " " + contentName : "") +
            (isContent4
              ? " is-4-desktop is-4-tablet is-8-mobile vertical-center"
              : "")
          }
        >
          {contentName === "contact-content" ? (
            this.props.children
          ) : (
            <div>
              <h1
                className={
                  "title is-1" + (heading === "Hello." ? "" : " is-uppercase")
                }
              >
                {heading}
              </h1>
              {subheading ? (
                <h2 className="subtitle is-2 is-uppercase">{subheading}</h2>
              ) : (
                ""
              )}
              {this.props.children}
            </div>
          )}
        </div>
        {isLast ? (
          <div className={"column img" + (imgIs4 ? " is-4" : "")} />
        ) : (
          ""
        )}
      </section>
    );
  }
}

// const mapActionToProps = {
//   onPassTarget: passTarget
// };

// export default connect(
//   null,
//   mapActionToProps
// )(HomeSection);

export default HomeSection;
