import React from 'react';
import PropTypes from 'prop-types';
import './ProductInfo.scss';
import ProductTags from '../ProductTags/ProductTags';

const ProductInfo = ({ data }) => (
  <div className="product-info">
    <div className="product-info__container">
      <img src={data.cover} alt="Product cover" className="product-info__img" />
      <span className="product-info__description">{data.description}</span>
    </div>
    <div className="product-info__container">
      <h1 className="product-info__title">{data.title}</h1>
      <span className="product-info__author">{data.author}</span>
      <ProductTags data={data.tags} />
    </div>
  </div>
);

ProductInfo.propTypes = {
  data: PropTypes.instanceOf(Object),
};

ProductInfo.defaultProps = {
  data: {},
};

export default ProductInfo;
