import {ADD_RECIPES} from "../actions/recipes";

export const initialState = {
  list: [],
  loading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case ADD_RECIPES:
      return {
        ...state,
        list: action.list,
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;
