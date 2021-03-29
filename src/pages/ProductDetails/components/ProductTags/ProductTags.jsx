import React from 'react';
import PropTypes from 'prop-types';
import img from '../../../../assets/icons/tags.png';
import './ProductTags.scss';

const ProductTags = ({ data }) => (
  <div className="product-tags">
    <img className="product-tags__img" src={img} alt="Tags icon" />
    {data.join(', ')}
  </div>
);

ProductTags.propTypes = {
  data: PropTypes.instanceOf(Array),
};

ProductTags.defaultProps = {
  data: [],
};

export default ProductTags;
