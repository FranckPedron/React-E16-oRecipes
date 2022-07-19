import {LOGIN} from "../actions/user";
import axios from "axios";

const loginMW = (store) => (next) => (action) => {
    switch (action.type) {

        case LOGIN:
            const [email, password] = store.getState();
            const logUser = async () => {
                try{
                    const response = await axios.post('http://localhost:3001/login', {
                        email: email,
                        password: password
                    })
                }
                catch (e) {
                    console.error(e);
                }
            }
            break;

        default:
            next(action);
    }
}

export default loginMW;
