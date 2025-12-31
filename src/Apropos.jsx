import ImgPresentation from '../public/Img/fond2.png';
import '../public/Scss/Apropos.scss';
import DonneeArcordeon from '../public/Arcordeon.json';


function Apropos() {
      
  return (
    <>
      <div className="ImgPresentation">
        <img src={ImgPresentation} alt="Background" className="BackgroundImg"/>
      </div>

      <div className="">
        <button className="accordeon-entete">
          <span>{DonneeArcordeon.titre}</span>
          <span className="accordeon-icone">⌃</span>
        </button>
        <div className="accordeon-contenu">
          <p>{DonneeArcordeon.texte}</p>
        </div>
      </div>
    </>
  );
}

export default Apropos;