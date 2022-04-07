import * as types from "../types";

const initialState = {
  products: [],
  total: 0,
  totalPrice: 0.0
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      let products = state.products;
      const product = action.payload;
      const exist = products.find((item) => item.id === action.payload.id);

      if (exist) {
        products = products.map((item) =>
          item.id === exist.id ? { ...exist, cartQty: exist.cartQty + 1 } : item
        );
      } else {
        products = [...products, { ...product, cartQty: 1 }]
      }

      const total = products.reduce((t, { cartQty }) => t + cartQty, 0);
      const totalPrice = products.reduce(
        (t, { currentPrice }) => t + parseFloat(currentPrice),
        0
      );

      return {
        ...state,
        products,
        total,
        totalPrice
      };

    default:
      return { ...state };
  }
};

export default cart;
