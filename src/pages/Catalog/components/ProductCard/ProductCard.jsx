import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.scss';

const ProductCard = ({ data, onClick }) => (
  <div className="product-card">
    <div className="product-card__img-container">
      <img
        src={data.cover}
        alt="Product cover"
        className="product-card__img"
        onClick={() => onClick(data.id)}
        role="presentation"
      />
    </div>
    <p role="presentation" className="product-card__title" onClick={() => onClick(data.id)}>{data.title}</p>
    <span className="product-card__author">{data.author}</span>
    <div className="product-card__price-container">
      <span className="product-card__price">{data.price}</span>
      <button
        type="button"
        className="product-card__button"
        onClick={() => onClick(data.id)}
      >
        View
      </button>
    </div>
  </div>
);

ProductCard.propTypes = {
  data: PropTypes.instanceOf(Object),
  onClick: PropTypes.func,
};

ProductCard.defaultProps = {
  data: {},
  onClick: () => {},
};

export default ProductCard;
