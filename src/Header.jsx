import '../public/Scss/Header.scss';
import Logo from '../public/Img/logo.svg';

function Header() {
  return (
    <header className="header">
        <img src={Logo} alt="Logo Kasa" />
        <nav className="header__nav">
            <a href="/">Accueil</a>
            <a href="/about">À propos</a>
        </nav>
    </header>
  );
}

export default Header;