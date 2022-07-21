import {addRecipes, GET_FAVORITES, LOAD_RECIPES, saveFavorites} from "../actions/recipes";
import axios from "axios";
import {LOGIN, LOGOUT, saveUser} from "../actions/user";

const instance = axios.create({
    baseURL: 'http://localhost:3001'
});

const apiMW = (store) => (next) => (action) => {
    switch (action.type) {
        case LOAD_RECIPES:
            const loadData = async () => {
                try {
                    const response = await instance.get('/recipes');
                    const recipes = response.data;
                    store.dispatch(addRecipes(recipes));
                } catch (e) {
                    console.log(e)
                }
            };
            loadData();
            break;

        case LOGIN:
            const state = store.getState();
            const logUser = async () => {
                try {
                    const response = await instance.post('/login', {
                        email: state.user.email,
                        password: state.user.password
                    });
                    const {pseudo, token} = response.data;

                    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
                    store.dispatch(saveUser(pseudo));
                } catch (e) {
                    console.error(e);
                }
            };
            logUser();
            break;

        case LOGOUT:
            delete instance.defaults.headers.common.Authorization;
            break;

        case GET_FAVORITES:
            const loadFavorites = async () => {
                try {
                    const response = await instance.get('/favorites');
                    const {favorites} = response.data;
                    store.dispatch(saveFavorites(favorites));
                } catch (e) {
                    console.log(e);
                }
            };
        loadFavorites();
        break;

        default:
            next(action);
    }
}

export default apiMW;
