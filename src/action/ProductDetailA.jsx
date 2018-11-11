export let getDetail = "product:details";
export function addProductDetails() {
  var detail = [];
  var data_1 = {
    features: [
      `Sewing Thread`,
      `Furniture Upholstery`,
      `Automotive Upholstery`,
      `Narrow Fabrics and Tapes and more`
    ],
    applications: [
      `Excellent bulk properties`,
      `Okeo – tex certified 100 className 1 for baby wear`,
      `Good abrasive properties enabling extended fabric life`,
      `High degree of colorfastness to withstand extensive washing`
    ],
    available: `Raw white, Twisted raw white, Twisted raw white on dye 
    onwards, Batch sizes : From 5KG - 400KG
      tubes, Textured dyed, Twisted dyed, Twisted - 60 TPM`
  };
  var data_2 = {
    features: [
      `Excellent bulk properties`,
      `Okeo – tex certified 100 className 1 for baby wear`,
      `Good abrasive properties enabling extended fabric life`,
      `High degree of colorfastness to withstand extensive washing`
    ],
    applications: [
      `Sewing Thread`,
      `Furniture Upholstery`,
      `Automotive Upholstery`,
      `Narrow Fabrics and Tapes and more`
    ],
    available: `Raw white, Twisted raw white, Twisted raw white on dye 
    tubes, Textured dyed, Twisted dyed, Twisted - 60 TPM
    onwards, Batch sizes : From 5KG - 400KG`
  };
  for (let i = 0; i <= 100; i++) {
    i % 2 === 0 ? detail.push(data_1) : detail.push(data_2);
  }
  return dispatch => {
    return dispatch({
      type: getDetail,
      payload: detail
    });
  };
}
