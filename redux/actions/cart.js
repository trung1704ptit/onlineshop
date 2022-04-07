import * as types from "../types";
import axios from "axios";

export const addToCart = (product) => (dispatch) => {
  dispatch({
    type: types.ADD_TO_CART,
    payload: product,
  });
};
