import { getList } from "../action/ProductListsA";

export function productListReducer(state = [], action) {
  switch (action.type) {
    case getList:
      return action.payload;
    default:
      return state;
  }
}
