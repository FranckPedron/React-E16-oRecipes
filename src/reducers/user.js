import {CHANGE_FIELD, LOGOUT, SAVE_USER} from "../actions/user";

export const initialState = {
    logged: false,
    email: '',
    password: ''
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

        case SAVE_USER:
            return {
                ...state,
                pseudo: action.pseudo,
                logged: true,
                email: '',
                password: ''
            };

        case LOGOUT:
            return {
                ...state,
                pseudo: '',
                logged: false
            };

        case CHANGE_FIELD:
            return {
                ...state,
                [action.key]: action.value
            };

        default:
            return state;
    }
};

export default reducer;
