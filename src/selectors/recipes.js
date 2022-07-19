/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} recipes - toutes les recettes
 * @param {string} searchedSlug - le slug de la recette recherchée
 * @return {Object} - La recette trouvée
 */
export function findRecipe(recipes, searchedSlug) {
    const recipe = recipes.find((testedRecipe) => {
        return testedRecipe.slug === searchedSlug;
    });
    return recipe;
}

export function getTitleByRecipesNumber(recipes) {
    switch (recipes?.length) {
        case 0:
            return 'Retrouvez prochainement nos recettes';
        case 1:
            return 'Retrouvez la recette du moment';

        default:
            return 'Découvrez nos recettes du moment';
    }
}
