import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductList from './components/ProductList/ProductList';
import reducer from './store/catalogSlice';
import './Catalog.scss';
import * as actions from './store/catalogActions';
import Loader from '../../components/Loader/Loader';
import SearchBar from './components/SearchBar/SearchBar';

const Catalog = () => {
  const { productList, isLoading } = useSelector((state) => state.catalog);
  const [filteredList, setFilteredList] = useState(null);
  const [filterByName, setFilterByName] = useState(null);
  const [filterByPrice, setFilterByPrice] = useState(null);

  const nameFilter = (array, name) => array.filter((item) => (
    item.title.toLowerCase().includes(name)));

  const priceFilter = (array, price) => {
    switch (price) {
      case '<25':
        return array.filter((item) => item.price < 25);
      case '<50':
        return array.filter((item) => item.price > 25 && item.price < 50);
      case '>50':
        return array.filter((item) => item.price > 50);

      default:
        return array;
    }
  };

  useEffect(() => {
    setFilteredList(productList);
    return () => setFilteredList(null);
  }, [productList]);

  useEffect(() => {
    let filtered = productList;
    if (filterByName) filtered = nameFilter(filtered, filterByName);
    if (filterByPrice) filtered = priceFilter(filtered, filterByPrice);
    setFilteredList(filtered);
  }, [filterByPrice, filterByName, productList]);

  if (isLoading) return <Loader />;

  return (
    <div className="catalog">
      <SearchBar
        filterByName={(e) => setFilterByName(e.target.value.toLowerCase())}
        filterByPrice={(e) => setFilterByPrice(e.target.value)}
      />
      <ProductList data={filteredList} />
    </div>
  );
};

export { reducer, actions };
export default Catalog;
