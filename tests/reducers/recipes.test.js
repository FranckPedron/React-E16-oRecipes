import reducer, {initialState} from 'src/reducers/recipes';

describe('Recipes Reducer', () => {
    describe('State initialisation', () => {
        it('should return the initial state without action', () => {
            expect(reducer()).toBe(initialState);
        });
    });

    describe('with action SAVE-RECIPES', () => {
        it('should give a new state with action SAVE-RECIPES', () => {
            const fakeRecipes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            const action = {
                type: 'ADD_RECIPES',
                list: fakeRecipes
            };
            const currentState = {
                test: 123456789,
            };
            const result = reducer(currentState, action);
            expect(result).toEqual({
                test: 123456789,
                list: fakeRecipes,
                loading: false
            });
        });

        it('should not modify the state for other actions', () => {
            const currentState = {
                test: 123456789,
            };
            const action = {
                type: 'BIDON'
            };
            const result = reducer(currentState, action);
            expect(result).toEqual(currentState);
        });
    });
});
