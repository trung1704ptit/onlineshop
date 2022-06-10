import * as types from "../types";

export const actionGetCategories = (categories) => (dispatch) => {
  dispatch({
    type: types.GET_CATEGORIES,
    payload: categories,
  });
};
