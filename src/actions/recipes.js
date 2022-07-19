export const LOAD_RECIPES = 'LOAD_RECIPES';
export const loadRecipes = () => ({
    type: LOAD_RECIPES,
});

export const ADD_RECIPES = 'ADD_RECIPES';
export const addRecipes = (recipes) => ({
    type: ADD_RECIPES,
    list: recipes
})
