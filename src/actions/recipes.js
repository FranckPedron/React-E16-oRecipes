export const LOAD_RECIPES = 'LOAD_RECIPES';
export const loadRecipes = () => ({
    type: LOAD_RECIPES,
});

export const ADD_RECIPES = 'ADD_RECIPES';
export const addRecipes = (recipes) => ({
    type: ADD_RECIPES,
    list: recipes
});

export const GET_FAVORITES = 'GET_FAVORITES';
export const getFavorites = () => ({
    type: GET_FAVORITES,
});

export const SAVE_FAVORITES = 'SAVE_FAVORITES';
export const saveFavorites = (recipes) => ({
    type: SAVE_FAVORITES,
    favorites: recipes
});
