import '../public/Scss/Index.scss';
import ImgPresentation from '../public/Img/fond.png';
import Donnee from '../public/donnee.json';

function AppIndex() {

  return (
    <>
      <div className="ImgPresentation">
        <img src={ImgPresentation} alt="Background" className="BackgroundImg"/>
        <h1 className="ImgPresentation__Title">Chez vous, partout et ailleurs</h1>
      </div>

      <article className="Article">
        <div className="Cards">
          {Donnee.map((item) => (
            <div className="Card" key={item.id}>
              <h2 className="Card__Title">{item.title}</h2>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}

export default AppIndex;
