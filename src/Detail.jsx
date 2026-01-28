import React from 'react';
import '../public/Scss/Detail.scss';
import Donnee from '../public/donnee.json';
import { useParams, Navigate } from 'react-router-dom';
import Arcordeon from './Props/Arcordeon';
import Carrousel from './Props/Carousel';

function Detail() {
  //!Récupération de l'id dans l'URL
  const { id } = useParams();

  const item = Donnee.find(element => element.id === id);


  //!Ajout erreur 404
  
  if (!item) {
    return <Navigate to="/404" replace />;
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
      <Carrousel images={item.pictures} />

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
                <svg key={index} className={star === 'plein' ? 'star plein' : 'star vide'} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="currentColor"/>
                </svg>
              ))}
            </div>
          </div>
        </div>

        <div className="contenueDetail">
          <Arcordeon 
            donnees={[
              {
                titre: 'Description',
                contenu: <p>{item.description}</p>
              },
              {
                titre: 'Équipements',
                contenu: (
                  <ul>
                    {item.equipments.map(eq => (
                      <li key={eq}>{eq}</li>
                    ))}
                  </ul>
                )
              }
            ]} 
          />
        </div>
      </div>
    </>
  );
}

export default Detail;
