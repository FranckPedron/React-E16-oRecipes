export const LOGIN = 'LOGIN';
export const login = () => ({
    type: LOGIN,
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
    type: LOGOUT,
});

export const SAVE_USER = 'SAVE_USER';
export const saveUser = (pseudo) => ({
    type: SAVE_USER,
   pseudo
});

export const CHANGE_FIELD = 'CHANGE_FIELD';
export const changeField = (key, value) => ({
    type: CHANGE_FIELD,
    key, value
});

export const CHECK_LOGGED = 'CHECK_LOGGED';
export const checkLogged = () => ({
    type: CHECK_LOGGED,
});
