import { Link } from 'react-router-dom';

function Card({ Donnee }) {
  return (
    <article className="Article" >
        <div className="Cards">
            {Donnee.map((item) => (
            <Link key={item.id} to={`/${item.id}/detail`}>
            <div className="Card">
                <img src={item.cover} alt={item.title} className="Card__Img"/>
                <h2 className="Card__Title">{item.title}</h2>
            </div>
            </Link>
            ))}
        </div>
    </article>
    );
}


export default Card;