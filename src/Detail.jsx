import '../public/Scss/Detail.scss';
import ImgPresentation from '../public/Img/fond.png';
import Donnee from '../public/donnee.json';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();

  const item = Donnee.find(element => element.id === id);

  

  return (
    <>
      <div className="ImgPresentationDetail">
        <img src={ImgPresentation} alt="Background" className="BackgroundImg" />
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

            <div className="rating">
              {/* étoiles */}
            </div>
          </div>
        </div>

        <div className="contenueDetail">
          <div className="accordeon">
            <div className="accordeon-item">
              <div className="accordeon-entete">Description <span className="accordeon-icone">⌃</span></div>
              <div className="accordeon-contenu">{item.description}</div>
            </div>

            <div className="accordeon-item">
              <div className="accordeon-entete">Équipements <span className="accordeon-icone">⌃</span></div>
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