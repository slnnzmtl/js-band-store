import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.scss';

const SearchBar = ({ filterByName, filterByPrice }) => (
  <div className="search-bar">
    <input type="text" placeholder="Search" className="search-bar__name" onChange={filterByName} />
    <select type="text" className="search-bar__price" onChange={filterByPrice}>
      <option value="null">Price</option>
      <option value="<25">Up to 25$</option>
      <option value="<50">From 25$ to 50$</option>
      <option value=">50">More then 50$</option>
    </select>
  </div>
);

SearchBar.propTypes = {
  filterByName: PropTypes.func,
  filterByPrice: PropTypes.func,
};

SearchBar.defaultProps = {
  filterByName: () => {},
  filterByPrice: () => {},
};

export default SearchBar;
