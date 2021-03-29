import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addProductToTheCart } from '../../pages/Cart/store/cartActions';
import './CartWidget.scss';

const CartWidget = ({ data }) => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);

  const addToCart = () => {
    const item = {
      ...data,
      quantity: counter,
    };

    dispatch(addProductToTheCart(item));
  };

  const totalPrice = () => (data.price * counter).toFixed(2);

  return (
    <div className="cart-widget">
      <div className="cart-widget__field">
        <span className="cart-widget__title">Price, $</span>
        <div className="cart-widget__value">{data.price}</div>
      </div>
      <div className="cart-widget__field">
        <span className="cart-widget__title">Count</span>
        <input
          type="number"
          name="counter"
          id="counter"
          value={counter}
          className="cart-widget__value cart-widget__counter"
          onChange={(e) => setCounter(
            e.target.value <= data.count ? e.target.value : data.count,
          )}
        />
      </div>
      <div className="cart-widget__field">
        <span className="cart-widget__title">Total Price, $</span>
        <div className="cart-widget__value">{totalPrice()}</div>
      </div>
      <button type="button" className="cart-widget__button button" onClick={data.title && addToCart}>Add to Cart</button>
    </div>
  );
};

CartWidget.propTypes = {
  data: PropTypes.instanceOf(Object),
};

CartWidget.defaultProps = {
  data: {},
};

export default CartWidget;
