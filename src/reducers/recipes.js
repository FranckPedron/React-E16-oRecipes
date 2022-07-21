import {ADD_RECIPES, SAVE_FAVORITES} from "../actions/recipes";

export const initialState = {
  list: [],
  favorites: [],
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

    case SAVE_FAVORITES:
      return {
        ...state,
        favorites: action.favorites,
      };

    default:
      return state;
  }
};

export default reducer;
