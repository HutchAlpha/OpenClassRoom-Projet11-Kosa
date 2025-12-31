import ImgPresentation from '../public/Img/fond2.png';
import '../public/Scss/Apropos.scss';
import DonneeArcordeon from '../public/Arcordeon.json';
import React from 'react';

function Apropos() {

  const [indexOuverts, setIndexOuverts] = React.useState([]);

  const toggle = (index) => {
    setIndexOuverts((prev) => {
      // Si ouvert → on le ferme
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      }
      // Sinon → on l'ouvre
      return [...prev, index];
    });
  };


  return (
    <>
      <div className="ImgPresentation">
        <img src={ImgPresentation} alt="Background" className="BackgroundImg" />
      </div>

      <div className="contenue">
      <div className="accordeon">
        {DonneeArcordeon.map((item, index) => {
          const ouvert = indexOuverts.includes(index); 

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
      </div>
    </>
  );
}

export default Apropos;
