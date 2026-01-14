import '../public/Scss/Index.scss';
import ImgPresentation from '../public/Img/fond.png';
import Donnee from '../public/donnee.json';
import Card from './Props/Card';
function AppIndex() {

  return (
    <>
      <div className="ImgPresentation">
        <img src={ImgPresentation} alt="Background" className="BackgroundImg"/>
        <h1 className="ImgPresentation__Title">Chez vous, partout et ailleurs</h1>
      </div>

      <Card Donnee={Donnee} />
    </>
  );
}

export default AppIndex;
