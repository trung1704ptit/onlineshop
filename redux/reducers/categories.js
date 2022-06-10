import * as types from "../types";

const initialState = {
  categories: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return { ...state };
  }
};

export default categoryReducer;
