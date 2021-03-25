import "./GoodCard.scss";

const GoodCard = ({data, onClick}) => (
  <div className="good-card">
    <div className="good-card__img-container">
      <img 
        src={data.cover} 
        alt="Good cover" 
        className="good-card__img"
        onClick={() => onClick(data.id)}
      />
    </div>
    <span className="good-card__title" onClick={() => onClick(data.id)}>{data.title}</span>
    <span className="good-card__author">{data.author}</span>
    <div className="good-card__price-container">
      <span className="good-card__price">{data.price}</span>
      <button className="good-card__button">View</button>
    </div>
  </div>
);

export default GoodCard;