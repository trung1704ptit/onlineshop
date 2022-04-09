import * as types from "../types";
import axios from "axios";

export const addToCart = (product) => (dispatch) => {
  dispatch({
    type: types.ADD_TO_CART,
    payload: product,
  });
};

export const removeFromCart = (product) => dispatch => {
  dispatch({
    type: types.REMOVE_FROM_CART,
    payload: product,
  })
}


export const updateCart = (product) => dispatch => {
  dispatch({
    type: types.UPDATE_CART,
    payload: product,
  })
}