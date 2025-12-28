import { Link } from 'react-router-dom';
import '../public/Scss/Header.scss';
import Logo from '../public/Img/logo.svg';

function Header() {
  return (
    <header className="header">
        <img src={Logo} alt="Logo Kasa" />
        <nav className="header__nav">
            <Link to="/">Accueil</Link>
            <Link to="/apropos">À propos</Link>
        </nav>
    </header>
  );
}

export default Header;