import React from "react";
import OverviewDataLeft from "./overviewData/OverviewDataLeft";
import OverviewDataRight from "./overviewData/OverviewDataRight";
import "./overview.css";
export default function Overview(props) {
  var { title, titleClass } = props;
  return (
    <div className="facilities-overview">
      <h1
        className={
          "h1 title is-uppercase" + (titleClass ? " " + titleClass : "")
        }
      >
        {title}
      </h1>
      <div className="facilities-overview-content columns">
        <OverviewDataLeft />
        <OverviewDataRight />
      </div>
    </div>
  );
}

// , titleClass
