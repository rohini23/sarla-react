import { getDetail } from "../action/ProductDetailA";
export function productDetailReducer(state = [], action) {
  return action.type === getDetail ? action.payload : state;
}
