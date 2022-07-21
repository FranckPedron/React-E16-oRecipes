import PropTypes from 'prop-types';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';
import Fav from 'src/components/Fav';

import Loading from './Loading';

import './style.scss';
import {Routes, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadRecipes} from "../../actions/recipes";
import {checkLogged} from "../../actions/user";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkLogged());
        dispatch(loadRecipes());
    }, []);

    const loading = useSelector((state) => state.recipes.loading);
    const isLogged = useSelector((state) => state.user.logged);

    if (loading) {
        return <Loading />;
    }
    return (
        <div className="app">
            <Menu/>
            <Routes>
                <Route path="/" element={<Home />}/>
                {isLogged && <Route path="/favorites" element={<Fav />}/>}
                {!isLogged && <Route path="/favorites" element={<Error message="Vous devez vous connecter pour accéder à la page demandée" />}/>}
                <Route path="/recipe/:slug" element={<Recipe />}/>
                <Route path="*" element={<Error message="La page demandée n'existe pas" />}/>
            </Routes>
        </div>
    );
}

App.propTypes = {
    loading: PropTypes.bool,
};

App.defaultProps = {
    loading: false,
};

export default App;
