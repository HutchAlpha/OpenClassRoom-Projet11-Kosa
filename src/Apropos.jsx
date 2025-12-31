import ImgPresentation from '../public/Img/fond2.png';

function Apropos() {
  return (
    <>
          <div className="ImgPresentation">
            <img src={ImgPresentation} alt="Background" className="BackgroundImg"/>
          </div>

    <div>
      <h1>À propos</h1>
      <p>Ceci est la page à propos.</p>
    </div>
        
    </>
  );
}

export default Apropos;