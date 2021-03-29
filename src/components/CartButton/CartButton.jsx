import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import icon from '../../assets/icons/cart.png';
import './CartButton.scss';

const CartButton = () => {
  const { list } = useSelector((state) => state.cart);

  return (
    <Link to="/cart">
      <div className="cart-button">
        <img src={icon} alt="Cart icon" className="cart-button__img" />
        <span className="cart-button__span">Cart</span>
        <span className="cart-counter cart-button__span">
          (
          {list.length}
          )
        </span>
      </div>
    </Link>
  );
};

export default CartButton;
