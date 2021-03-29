import React from 'react';
import PropTypes from 'prop-types';
import Item from './CartListItem';
import './CartList.scss';

const CartList = ({ data }) => (
  <table className="cart-list">
    <thead>
      <tr className="cart-list-item">
        <td className="cart-list-item__name">Name</td>
        <td className="cart-list-item__count">Quantity</td>
        <td className="cart-list-item__price">Price, $</td>
        <td className="cart-list-item__total">Total, $</td>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => <Item item={item} key={item.id} />)}
    </tbody>
  </table>
);

CartList.propTypes = {
  data: PropTypes.instanceOf(Array),
};

CartList.defaultProps = {
  data: [],
};

export default CartList;
