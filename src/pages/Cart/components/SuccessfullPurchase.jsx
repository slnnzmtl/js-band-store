import React from 'react';
import PropTypes from 'prop-types';
import ModalWindow from '../../../components/ModalWindow/ModalWindow';
import CartList from '../../../components/CartList/CartList';

const SuccessfullPurchase = ({ closeWindow, list, totalPrice }) => (
  <ModalWindow closeWindow={closeWindow}>
    <div className="title">You successfully placed an order!</div>
    <CartList data={list} />
    <div className="cart__total-price">
      Total Price:
      <b>
        {totalPrice.toFixed(2)}
        $
      </b>
    </div>
  </ModalWindow>
);

SuccessfullPurchase.propTypes = {
  closeWindow: PropTypes.func,
  list: PropTypes.instanceOf(Array),
  totalPrice: PropTypes.number,
};

SuccessfullPurchase.defaultProps = {
  closeWindow: () => {},
  list: [],
  totalPrice: 0,
};

export default SuccessfullPurchase;
