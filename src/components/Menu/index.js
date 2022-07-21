import {useSelector} from 'react-redux';

import './style.scss';
import {NavLink} from "react-router-dom";

const Menu = () => {

    const recipes = useSelector((state) => state.recipes.list);
    const isLogged = useSelector((state) => state.user.logged);
    const getClassnames = ({ isActive }) => `menu-link ${isActive ? 'menu-link--active' : ''}`;
    return (
        <nav className="menu">
            <NavLink
                className={getClassnames}
                to="/"
            >
                Accueil
            </NavLink>
            {isLogged && <NavLink to="/favorites" className={getClassnames}>
                Mes recettes favorites
            </NavLink>}
            {recipes.map((recipe) => (
                <NavLink
                    key={recipe.id}
                    className={getClassnames}
                    to={`/recipe/${recipe.slug}`}
                >
                    {recipe.title}
                </NavLink>
            ))}
        </nav>
    );
};

export default Menu;
