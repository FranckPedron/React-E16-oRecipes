import {useSelector} from 'react-redux';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';
import {getTitleByRecipesNumber} from "../../selectors/recipes";

const Home = () => {
    const recipes = useSelector((state) => state.recipes.list);
    const text = getTitleByRecipesNumber(recipes);

    return (
        <Page>
            <AppHeader/>
            <Content
                title="Les recettes oRecipes"
                text={text}
                recipes={recipes}
            />
        </Page>
    );
};

export default Home;
