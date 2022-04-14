import * as types from "../types";

const initialState = {
  products: [],
};

const cart = (state = initialState, action) => {
  let newProducts;
  switch (action.type) {
    case types.ADD_TO_WISHLIST:
      const exist = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (!exist) {
        newProducts = [...state.products, action.payload];
      }
      return {
        ...state,
        products: newProducts,
      };

    case types.REMOVE_FROM_WISHLIST:
      newProducts = state.products.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        products: newProducts,
      };

    default:
      return { ...state };
  }
};

export default cart;
