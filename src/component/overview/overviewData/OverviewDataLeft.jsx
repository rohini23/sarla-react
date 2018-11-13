import React from "react";
export default function OverviewDataLeft(props) {
  return (
    <div className="overview-data-left column is-6-desktop is-6-tablet">
      {props.children}
    </div>
  );
}
