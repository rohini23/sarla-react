import React from "react";
import "./stock.css";
function Stock(props) {
  if (!props.stock) throw Error("stock:stock details  is required");
  // let { value, name, arrow, stockPre, color } = props.stock;
  return (
    <React.Fragment>
      {props.stock.map((elem, ind) => {
        return (
          <li key={ind}>
            {elem.name} {elem.value}
            <span className={elem.color}>
              {elem.stockPre}
              <i className={"fas " + elem.arrow} />
            </span>
          </li>
        );
      })}
    </React.Fragment>
  );
}

export default Stock;
