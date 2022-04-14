import * as types from "../types";

export const addToWishlist = (product) => (dispatch) => {
  dispatch({
    type: types.ADD_TO_WISHLIST,
    payload: product,
  });
};

export const removeFromWishlist = (product) => (dispatch) => {
  dispatch({
    type: types.REMOVE_FROM_WISHLIST,
    payload: product,
  });
};
