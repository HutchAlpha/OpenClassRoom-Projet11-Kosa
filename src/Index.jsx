import '../public/Scss/Index.scss';
import ImgPresentation from '../public/Img/fond.png';
import Donnee from '../public/donnee.json';
import { Link } from 'react-router-dom';
function AppIndex() {

  return (
    <>
      <div className="ImgPresentation">
        <img src={ImgPresentation} alt="Background" className="BackgroundImg"/>
        <h1 className="ImgPresentation__Title">Chez vous, partout et ailleurs</h1>
      </div>

      <article className="Article" >
        <div className="Cards">
          {Donnee.map((item) => (
          <Link to={`/${item.id}/detail`}>
            <div className="Card" key={item.id}>
              <h2 className="Card__Title">{item.title}</h2>
            </div>
          </Link>
          ))}
        </div>
      </article>
    </>
  );
}

export default AppIndex;
