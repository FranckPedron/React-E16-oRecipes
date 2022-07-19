import {addRecipes, LOAD_RECIPES} from "../actions/recipes";
import axios from "axios";

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
            break;

        default:
            next(action);
    }
}

export default apiMW;
