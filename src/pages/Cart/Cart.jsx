import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import reducer from './store/cartSlice';
import CartList from './components/CartList/CartList';
import { getTotalPrice, purchase, resetCart } from './store/cartActions';
import './Cart.scss';
import SuccessfullPurchase from './components/SuccessfullPurchase';

const Cart = () => {
  const dispatch = useDispatch();
  const { list, totalPrice, purchaseResult } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotalPrice());
  }, [list, dispatch]);

  const handleClick = () => {
    const array = [];
    list.forEach((item) => {
      for (let i = 0; i < item.quantity; i += 1) {
        array.push(item.id);
      }
    });
    dispatch(purchase(array));
  };

  const closeWindow = () => {
    dispatch(resetCart());
  };

  if (!list.length) return <div className="cart-empty">Cart is empty</div>;

  return (
    <div className="cart">
      {purchaseResult
      && <SuccessfullPurchase closeWindow={closeWindow} list={list} totalPrice={totalPrice} />}
      <div className="cart__header">
        <h1 className="cart__title">In your cart:</h1>
        <button type="button" onClick={handleClick} className="cart__button button">Purchase</button>
      </div>
      <CartList data={list} />
      <div className="cart__total-price">
        Total Price:
        <b>
          {totalPrice.toFixed(2)}
          $
        </b>
      </div>
    </div>
  );
};

export { reducer };
export default Cart;
