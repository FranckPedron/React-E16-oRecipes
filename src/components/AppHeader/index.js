import logo from 'src/assets/logo.png'
import './style.scss';
import {Link} from "react-router-dom";

const AppHeader = () => (
    <header className="header">
        <Link to="/">
            <img src={logo} className="header-logo" alt="Logo oRecipes"/>
        </Link>
    </header>
);

export default AppHeader;
