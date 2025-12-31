import ImgPresentation from '../public/Img/fond2.png';
import '../public/Scss/Apropos.scss';
import DonneeArcordeon from '../public/Arcordeon.json';
import React from 'react';

function Apropos() {

  const [indexOuvert, setIndexOuvert] = React.useState(null);

  const toggle = (index) => {
    setIndexOuvert((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <div className="ImgPresentation">
        <img src={ImgPresentation} alt="Background" className="BackgroundImg" />
      </div>

      <div className="accordeon">
        {DonneeArcordeon.map((item, index) => {
          const ouvert = indexOuvert === index;

          return (
            <div key={index} className={`accordeon-item ${ouvert ? 'est-ouvert' : ''}`}>
              
              <button className="accordeon-entete" onClick={() => toggle(index)}>
                <span>{item.titre}</span>
                <span className="accordeon-icone">⌃</span>
              </button>
              
              <div className="accordeon-contenu">
                <p>{item.texte}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Apropos;
