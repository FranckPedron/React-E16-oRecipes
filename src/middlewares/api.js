import {addRecipes, GET_FAVORITES, LOAD_RECIPES, saveFavorites} from "../actions/recipes";
import axios from "axios";
import {CHECK_LOGGED, LOGIN, LOGOUT, saveUser} from "../actions/user";

const instance = axios.create({
    baseURL: 'http://localhost:3001'
});

if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token');
    instance.defaults.headers.common.Authorization = `bearer ${token}`;
}

const apiMW = (store) => (next) => async (action) => {
    switch (action.type) {
        case LOAD_RECIPES:
            try {
                const response = await instance.get('/recipes');
                const recipes = response.data;
                store.dispatch(addRecipes(recipes));
            } catch (e) {
                console.log(e)
            }
            break;

        case LOGIN:
            const state = store.getState();
            try {
                const response = await instance.post('/login', {
                    email: state.user.email,
                    password: state.user.password
                });
                const {pseudo, token} = response.data;

                instance.defaults.headers.common.Authorization = `bearer ${token}`;
                localStorage.setItem('token', token);
                store.dispatch(saveUser(pseudo));
            } catch (e) {
                console.error(e);
            }
            break;

        case LOGOUT:
            delete instance.defaults.headers.common.Authorization;
            localStorage.removeItem('token');
            next(action);
            break;

        case GET_FAVORITES:
            try {
                const response = await instance.get('/favorites');
                const {favorites} = response.data;
                store.dispatch(saveFavorites(favorites));
            } catch (e) {
                console.log(e);
            }
            break;

        case CHECK_LOGGED:
            try {
                const response = await instance.get('/check-user');
                const {pseudo, token} = response.data;

                instance.defaults.headers.common.Authorization = `bearer ${token}`;
                localStorage.setItem('token', token);
                store.dispatch(saveUser(pseudo));
            } catch (e) {
                console.log(e);
            }
            break;

        default:
            next(action);
    }
}

export default apiMW;
