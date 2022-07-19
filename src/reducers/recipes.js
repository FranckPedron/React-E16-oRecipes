import {ADD_RECIPES} from "../actions/recipes";

export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case ADD_RECIPES:
      return {
        ...state,
        list: action.list,
      };

    default:
      return state;
  }
};

export default reducer;
