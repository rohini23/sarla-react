export let getList = "product:add";

export function addProductList() {
  var list = [
    {
      bg: "#c53321",
      to: "#fixme",
      value: "Textured Polyester Yarns"
    },
    {
      bg: "#1d1e4d",
      to: "#fixme",
      value: "Textured Nylon Stretch Yarns"
    },
    {
      bg: "#c48f8f",
      to: "#fixme",
      value: "Bulklon"
    },
    {
      bg: "#6c3a3a",
      to: "#fixme",
      value: "Textured Sewing Thread"
    },
    {
      bg: "#a51e1e",
      to: "#fixme",
      value: "Covered Yarns"
    },
    {
      bg: "#1ea57a",
      to: "#fixme",
      value: "High Tenacity Yarns"
    },
    {
      bg: "#67bea2",
      to: "#fixme",
      value: "Dyed Yarns & Threads"
    },
    {
      bg: "#50679d",
      to: "#fixme",
      value: "Bonded Threads"
    },
    {
      bg: "#41cece",
      to: "#fixme",
      value: "Embroidery Threads"
    },
    {
      bg: "#dab929",
      to: "#fixme",
      value: "Mattress Threads"
    }
  ];
  return dispatch => {
    return dispatch({
      type: getList,
      payload: list
    });
  };
}
