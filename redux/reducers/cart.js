import * as types from "../types";

const initialState = {
  products: [],
  total: 0,
  totalPrice: 0.0,
};

const cart = (state = initialState, action) => {
  let products = state.products;
  let product = action.payload;
  let total = 0;
  let totalPrice = 0;
  let exist = false;

  switch (action.type) {
    case types.ADD_TO_CART:
      exist = products.find((item) => item.id === action.payload.id);

      if (exist) {
        products = products.map((item) =>
          item.id === exist.id
            ? { ...exist, cartQty: exist.cartQty + (product.cartQty || 1) }
            : item
        );
      } else {
        products = [...products, { ...product, cartQty: product.cartQty || 1 }];
      }

      total = products.reduce((t, { cartQty }) => t + cartQty, 0);
      totalPrice = products
        .reduce(
          (t, { currentPrice, cartQty }) =>
            t + parseFloat(currentPrice) * cartQty,
          0
        )
        .toFixed(2);

      return {
        ...state,
        products,
        total,
        totalPrice,
      };

    case types.UPDATE_CART:
      exist = products.find((item) => item.id === action.payload.id);

      if (exist) {
        products = products.map((item) =>
          item.id === exist.id ? { ...exist, cartQty: product.cartQty } : item
        );
      }

      total = products.reduce((t, { cartQty }) => t + cartQty, 0);
      totalPrice = products
        .reduce(
          (t, { currentPrice, cartQty }) =>
            t + parseFloat(currentPrice) * cartQty,
          0
        )
        .toFixed(2);

      return {
        ...state,
        products,
        total,
        totalPrice,
      };

    case types.REMOVE_FROM_CART:
      const newProducts = products.filter((item) => item.id !== product.id);

      total = newProducts.reduce((t, { cartQty }) => t + cartQty, 0);
      totalPrice = newProducts
        .reduce(
          (t, { currentPrice, cartQty }) =>
            t + parseFloat(currentPrice) * cartQty,
          0
        )
        .toFixed(2);

      return {
        ...state,
        products: newProducts,
        total,
        totalPrice,
      };

    default:
      return { ...state };
  }
};

export default cart;
