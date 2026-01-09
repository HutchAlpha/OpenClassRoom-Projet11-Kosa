import React from 'react';
import '../public/Scss/Detail.scss';
import Donnee from '../public/donnee.json';
import { useParams } from 'react-router-dom';

function Detail() {
  //!Récupération de l'id dans l'URL
  const { id } = useParams();

  const item = Donnee.find(element => element.id === id);


  //!Gestion de l'accordéon
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

  //!Gestion des images

  let images = item.pictures;
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }



  //!Gestion des étoiles

  let totalStars = 5;
  let VEtoile = parseInt(item.rating);
  let starsArray = [];
  for (let i = 1; i <= totalStars; i++) {
    if (i <= VEtoile) {
      starsArray.push('plein'); 
    } else {
      starsArray.push('vide'); 
    }
  }


  return (
    <>
      <div className="ImgPresentationDetail">
        <img src={images[currentImageIndex]} alt="Background" className="BackgroundImg" />
        <button className="prev-button" onClick={prevImage}>&lt;</button>
        <button className="next-button" onClick={nextImage}>&gt;</button>
      </div>

      <div className="Detail">
        <div className="BlockTitle">
          <div className="BlockTitle__Left">
            <h2>{item.title}</h2>
            <p>{item.location}</p>

            <div className="BlockTitle__Tags">
              {item.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="BlockTitle__Right">
            <div className="host">
              <span>{item.host.name}</span>
              <img src={item.host.picture} alt={item.host.name} />
            </div>

            <div className="VEtoile">
              {starsArray.map((star, index) => (
                <span key={index} className={star === 'plein' ? 'star plein' : 'star vide'}>
                  {star === 'plein' ? '★' : '☆'}
                </span>
              ))}

              {/* étoiles */}
            </div>
          </div>
        </div>

        <div className="contenueDetail">
          <div className="accordeon">

            {/* Description */}
            <div className={`accordeon-item ${indexOuverts.includes(0) ? 'est-ouvert' : ''}`}>
              <button className="accordeon-entete" onClick={() => toggle(0)}>
                <span>Description</span>
                <span className="accordeon-icone">⌃</span>
              </button>

              <div className="accordeon-contenu">
                <p>{item.description}</p>
              </div>
            </div>

            {/* Équipements */}
            <div className={`accordeon-item ${indexOuverts.includes(1) ? 'est-ouvert' : ''}`}>
              <button className="accordeon-entete" onClick={() => toggle(1)}>
                <span>Équipements</span>
                <span className="accordeon-icone">⌃</span>
              </button>

              <div className="accordeon-contenu">
                <ul>
                  {item.equipments.map(eq => (
                    <li key={eq}>{eq}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
