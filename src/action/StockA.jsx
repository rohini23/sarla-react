export let getStock = "stock:add";

export function addStock() {
  var stock = [
    {
      value: "1006.20",
      name: "NSC",
      arrow: "fa-arrow-up",
      stockPre: "+1.55%",
      color: "green"
    },
    {
      value: "1006.70",
      name: "BSC",
      arrow: "fa-arrow-down",
      stockPre: "-1.55%",
      color: "red"
    }
  ];
  return dispatch => {
    return dispatch({
      type: getStock,
      payload: stock
    });
  };
}
