import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from '../../components/ProductList/ProductList';
import reducer from './store/catalogSlice';
import './Catalog.scss';
import * as actions from './store/catalogActions';
import Loader from '../../components/Loader/Loader';

const Catalog = () => {
  const { productList, isLoading } = useSelector((state) => state.catalog);

  if (isLoading) return <Loader />;

  return (
    <div className="catalog">
      <ProductList data={productList} />
    </div>
  );
};

export { reducer, actions };
export default Catalog;
