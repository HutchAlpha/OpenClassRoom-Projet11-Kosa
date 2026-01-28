import { Link } from 'react-router-dom';
import '../public/Scss/Header.scss';
import Logo from '../public/Img/logo.svg';

function Header() {
  return (
    <header className="header">
        <img src={Logo} alt="Logo Kasa" className="header__logo" />
        <nav className="header__nav">
            <Link to="/" className="header__nav-link">Accueil</Link>
            <Link to="/apropos" className="header__nav-link">A Propos</Link>
        </nav>
    </header>
  );
}

export default Header;