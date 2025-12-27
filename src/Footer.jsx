import '../public/Scss/Footer.scss';
import LogoBlack from '../public/Img/logoBlack.svg';

function Footer() {
  return (
    <footer className="footer">
        <img src={LogoBlack} alt="Logo Kasa" className="footer__logo" />
        <p className="footer__text">© 2026 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;