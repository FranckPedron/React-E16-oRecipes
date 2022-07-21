import {useDispatch, useSelector} from 'react-redux';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';
import {getTitleByRecipesNumber} from "../../selectors/recipes";
import {useEffect} from "react";
import {getFavorites} from "../../actions/recipes";

const Fav = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFavorites())
    }, []);
    const favorites = useSelector(state => state.recipes.favorites);
    const text = getTitleByRecipesNumber(favorites);

    return (
        <Page>
            <AppHeader/>
            <Content
                title="Mes recettes favorites"
                text={text}
                recipes={favorites}
            />
        </Page>
    );
};

export default Fav;
