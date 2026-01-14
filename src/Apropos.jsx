import ImgPresentation from '../public/Img/fond2.png';
import '../public/Scss/Apropos.scss';
import DonneeArcordeon from '../public/Arcordeon.json';
import Arcordeon from './Props/Arcordeon';

function Apropos() {
  return (
    <>
      <div className="ImgPresentation">
        <img src={ImgPresentation} alt="Background" className="BackgroundImg" />
      </div>

      <div className="contenue">
        <Arcordeon donnees={DonneeArcordeon} />
      </div>
    </>
  );
}

export default Apropos;
