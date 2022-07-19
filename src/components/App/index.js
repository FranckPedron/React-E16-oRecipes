import PropTypes from 'prop-types';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';

import Loading from './Loading';

import './style.scss';
import {Routes, Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loadRecipes} from "../../actions/recipes";

function App(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadRecipes())
    },[]);

    if (props.loading) {
        return <Loading/>;
    }
    return (
        <div className="app">
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/recipe/:slug" element={<Recipe/>}/>
                <Route path="*" element={<Error/>}/>
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
