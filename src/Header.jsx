import '../public/Scss/Header.scss';
import Logo from '../public/Img/logo.svg';

function Header() {
  return (
    <header className="Header">
        <img src={Logo} alt="Logo Kasa" />
        <div className="nav-links">
            <a href="/">Accueil</a>
            <a href="/about">À Propos</a>
        </div>
    </header>
  );
}

export default Header;