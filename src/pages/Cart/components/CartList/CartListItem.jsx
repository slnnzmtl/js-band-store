import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CartListItem = ({ item }) => (
  <tr className="cart-list-item">

    <td className="cart-list-item__name">
      <Link to={`/catalog/${item.id}`}>{item.title}</Link>
    </td>

    <td className="cart-list-item__count">{item.quantity}</td>
    <td className="cart-list-item__price">{item.price}</td>
    <td className="cart-list-item__total">{item.price * item.quantity}</td>
  </tr>
);

CartListItem.propTypes = {
  item: PropTypes.instanceOf(Object),
};

CartListItem.defaultProps = {
  item: {},
};

export default CartListItem;
