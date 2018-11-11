import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productListReducer } from "./reducer/ProductListsR";
import { productDetailReducer } from "./reducer/ProductDetailR";
import { stockReducer } from "./reducer/StockR";
import { PassTargetReduser } from "./reducer/SetTargetR";

let reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  stockList: stockReducer,
  passTarget: PassTargetReduser
});

var store = createStore(
  reducer,
  { productList: [], stockList: [] },
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
  )
);

export default store;
