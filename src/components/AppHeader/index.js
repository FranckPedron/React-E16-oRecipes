import logo from 'src/assets/logo.png'
import './style.scss';

const AppHeader = () => (
  <header className="header">
    <img src={logo} className="header-logo" alt="Logo oRecipes" />
  </header>
);

export default AppHeader;
