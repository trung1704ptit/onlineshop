import * as types from "../types";

const initialState = {
  products: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_WISHLIST:
      return {
        ...state,
      };

    case types.REMOVE_FROM_WISHLIST:
      return {
        ...state,
      };

    default:
      return { ...state };
  }
};

export default cart;
