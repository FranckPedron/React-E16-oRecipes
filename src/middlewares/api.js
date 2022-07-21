import {addRecipes, LOAD_RECIPES} from "../actions/recipes";
import axios from "axios";
import {LOGIN, saveUser} from "../actions/user";

const apiMW = (store) => (next) => (action) =>{
    switch (action.type) {
        case LOAD_RECIPES:
        const loadData = async () => {
           try {
                const response = await axios.get('http://localhost:3001/recipes');
                const recipes = response.data;
                store.dispatch(addRecipes(recipes));
            }
            catch (e) {
                console.log(e)
            }
        };
        loadData();
        next(action);
            break;

        case LOGIN:
            const state = store.getState();
            const logUser = async () => {
                try{
                    const response = await axios.post('http://localhost:3001/login', {
                        email: state.user.email,
                        password: state.user.password
                    });
                    const {pseudo} = response.data;
                    store.dispatch(saveUser(pseudo));
                }
                catch (e) {
                    console.error(e);
                }
            };

            logUser();
            next(action);
            break;

        default:
            next(action);
    }
}

export default apiMW;
