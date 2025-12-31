import ImgPresentation from '../public/Img/fond2.png';
import '../public/Scss/Apropos.scss';


function Apropos() {

  return (
    <>
      <div className="ImgPresentation">
        <img src={ImgPresentation} alt="Background" className="BackgroundImg"/>
      </div>

      <div class="accordeon">
        <div class="accordeon-item">
          <button class="accordeon-entete">
            <span>Fiabilité</span>
            <span class="accordeon-icone">⌃</span>
          </button>
          <div class="accordeon-contenu">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
        </div>

        <div class="accordeon-item">
          <button class="accordeon-entete">
            <span>Respect</span>
            <span class="accordeon-icone">⌃</span>
          </button>
          <div class="accordeon-contenu">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Apropos;