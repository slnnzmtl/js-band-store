import {
  addProductToTheCart,
  getCartFromLocalStorage,
  getTotalPrice,
  purchase,
  ADD_PRODUCT_TO_THE_CART,
  GET_CART_FROM_LOCALSTORAGE,
  GET_TOTAL_PRICE,
  PURCHASE_SUCCESS,
  PURCHASE_FAILED,
  CART_RESET,
  resetCart,
} from './cartActions';

import { userLogin } from '../../Login/store/loginActions';

import store from '../../../store';

describe('cart actions tests', () => {
  test('must return an action of type ADD_PRODUCT_TO_THE_CART and passed payload', async () => {
    const payload = 'product 1';
    expect(
      await store.dispatch(addProductToTheCart(payload)),
    ).toMatchObject({ type: ADD_PRODUCT_TO_THE_CART, payload });
  });

  test('must return an action of type GET_CART_FROM_LOCALSTORAGE', async () => {
    expect(
      await store.dispatch(getCartFromLocalStorage()),
    ).toMatchObject({ type: GET_CART_FROM_LOCALSTORAGE });
  });

  test('must return an action of type GET_TOTAL_PRICE', async () => {
    expect(
      await store.dispatch(getTotalPrice()),
    ).toMatchObject({ type: GET_TOTAL_PRICE });
  });

  test('must return an action of type PURCHASE_FAILED', async () => {
    const payload = [1, 2, 3];
    expect(
      await store.dispatch(purchase(payload)),
    ).toMatchObject({ type: PURCHASE_FAILED });
  });

  test('must return an action of type PURCHASE_SUCCESS', async () => {
    const payload = [1, 2, 3];
    store.dispatch(userLogin('slnnzmtl'))
      .then(async () => {
        expect(
          await store.dispatch(purchase(payload)),
        ).toMatchObject({ type: PURCHASE_SUCCESS });
      });
  });

  test('must return an action of type CART_RESET', async () => {
    expect(
      await store.dispatch(resetCart()),
    ).toMatchObject({ type: CART_RESET });
  });
});
