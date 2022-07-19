import {findRecipe} from "src/selectors/recipes";
import recipes from 'src/data'

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
