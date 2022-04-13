import { combineReducers } from "redux";
import cart from "./cart";
import wishlist from "./wishlist";


const rootReducer = combineReducers({
  cart,
  wishlist,
});

export default rootReducer;
