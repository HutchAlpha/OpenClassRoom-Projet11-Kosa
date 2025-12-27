import '../public/Scss/App.scss';
import ImgPresentation from '../public/Img/fond.png';

function App() {

  return (
    <>
      <div className="ImgPresentation">
        <img src={ImgPresentation} alt="Background" className="BackgroundImg"/>
        <h1 className="ImgPresentation__Title">Chez vous, partout et ailleurs</h1>
      </div>

      <article className="Article">
        <h1 className="Article__Title"></h1>
      </article>
    </>
  );
}

export default App;
