import {findRecipe, getTitleByRecipesNumber} from "src/selectors/recipes";
import recipes from 'src/data';

describe('Recipes selectors', () =>{
    describe('Test FindRecipes ', () => {
        it('should return first recipe', () => {
            const {slug} = recipes[0];
            expect(findRecipe(recipes, slug)).toEqual(recipes[0])
        })

        it('should return undefined for bad slug', () => {
            const slug = 'fake';
            expect(findRecipe(recipes, slug)).toBeUndefined();
        });

        it('should return undefined for an empty list', () => {
            expect(findRecipe([], recipes[0].slug)).toBeUndefined();
        })
    });

    describe('getTitleByRecipesNumber', () => {
        it ('should be a function', () => {
            expect(typeof getTitleByRecipesNumber).toBe('function');
        });

        it ('should return a string', () => {
            expect(typeof getTitleByRecipesNumber()).toBe('string');
        });

        it ('should return a default title', () => {
            expect(getTitleByRecipesNumber()).toBe('Découvrez nos recettes')
        });

        it ('should return a specific title for an empty list', () => {
            expect(getTitleByRecipesNumber([])).toBe('Retrouvez prochainement nos recettes')
        });

        it ('should return a specific title for one recipe', () => {
            expect(getTitleByRecipesNumber([{recette:123}])).toBe('Retrouvez la recette du moment')
        });

        it ('should return a specific title for several recipes', () => {
            expect(getTitleByRecipesNumber([{recette:123}, {recette:123}])).toBe('Découvrez nos recettes')
        });
    });
});
