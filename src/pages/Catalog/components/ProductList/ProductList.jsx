import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.scss';

const ProductList = ({ data }) => {
  const goToProductPage = (id) => {
    window.location.hash = `/catalog/${id}`;
  };

  return (
    <div className="product-list">
      {
        data
        && data.map((item) => <ProductCard data={item} key={item.id} onClick={goToProductPage} />)
      }
    </div>
  );
};

ProductList.propTypes = {
  data: PropTypes.instanceOf(Array),
};

ProductList.defaultProps = {
  data: [],
};

export default ProductList;
