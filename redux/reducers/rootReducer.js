import { combineReducers } from "redux";
import cart from "./cart";
import wishlist from "./wishlist";
import category from "./categories";

const rootReducer = combineReducers({
  cart,
  wishlist,
  category,
});

export default rootReducer;
