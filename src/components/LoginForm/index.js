import Field from './Field';

import './style.scss';
import {useDispatch, useSelector} from "react-redux";
import {login, logout} from "../../actions/user";

const LoginForm = () => {
    const isLogged = useSelector((state) => state.user.logged);
    const email = useSelector((state) => state.user.email);
    const password = useSelector((state) => state.user.password);
    const loggedMessage = useSelector((state) => `Bienvenue ${state.user.pseudo}`);

    const dispatch = useDispatch();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(login());
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className="login-form">
            {isLogged && (
                <div className="login-form-logged">
                    <p className="login-form-message">
                        {loggedMessage}
                    </p>
                    <button
                        type="button"
                        className="login-form-button"
                        onClick={handleLogout}
                    >
                        Déconnexion
                    </button>
                </div>
            )}
            {!isLogged && (

                <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
                    <Field
                        name="email"
                        type="email"
                        placeholder="Adresse Email"
                        value={email}
                    />
                    <Field
                        name="password"
                        type="password"
                        placeholder="Mot de passe"
                        value={password}
                    />
                    <button
                        type="submit"
                        className="login-form-button"
                    >
                        OK
                    </button>
                </form>
            )}
        </div>
    );
};

export default LoginForm;
