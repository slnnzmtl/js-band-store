import {
  ADD_PRODUCT_TO_THE_CART,
  GET_CART_FROM_LOCALSTORAGE,
  GET_TOTAL_PRICE,
  PURCHASE_STARTED,
  PURCHASE_SUCCESS,
  PURCHASE_FAILED,
  CART_RESET,
} from './cartActions';
import reducer from './cartSlice';

const initialState = {
  list: [],
  count: 0,
  totalPrice: 0,
  purchaseResult: false,
  isLoading: false,
};

describe('cart reducer tests', () => {
  test('must return a new state with the isLoading: true', () => {
    expect(
      reducer(initialState, { type: PURCHASE_STARTED }),
    ).toMatchObject({ isLoading: true });
  });

  test('must return a new state with the isLoading: false and purchaseResult: true', () => {
    expect(
      reducer(initialState, { type: PURCHASE_SUCCESS }),
    ).toMatchObject({ isLoading: false, purchaseResult: true });
  });

  test('must return a new state with the isLoading: false and purchaseResult: false', () => {
    expect(
      reducer(initialState, { type: PURCHASE_FAILED }),
    ).toMatchObject({ isLoading: false, purchaseResult: false });
  });

  test('must return a new state with the list contains the payload', () => {
    const payload = 'product 1';
    expect(
      reducer(initialState, { type: ADD_PRODUCT_TO_THE_CART, payload }),
    ).toMatchObject({ list: [payload] });
  });

  test('must return a new state with the list contains the payload passed to localstorage', () => {
    const payload = 'product 1';
    localStorage.setItem('test-cart', JSON.stringify([payload]));
    expect(
      reducer(initialState, { type: GET_CART_FROM_LOCALSTORAGE }),
    ).toMatchObject({ list: [payload] });
  });

  test('must return a new state with the list: []', () => {
    expect(
      reducer(initialState, { type: CART_RESET }),
    ).toMatchObject({ list: [] });
  });

  test('must return a new state with the totalPrice: 50', () => {
    const state = {
      list: [
        { price: 10, quantity: 1 }, { price: 20, quantity: 2 },
      ],
    };
    expect(
      reducer(state, { type: GET_TOTAL_PRICE }),
    ).toMatchObject({ totalPrice: 50 });
  });
});
