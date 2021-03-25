import GoodCard from "../GoodCard/GoodCard";
import "./GoodsList.scss";

const GoodsList = ({goods}) => {

  const goToGoodPage = id => {
    
  };

  return (
    <div className="goods-list">
      {goods.map(good => 
        <GoodCard data={good} key={good.id} onClick={goToGoodPage} />
      )}
    </div>
  )
};

export default GoodsList;