import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_STARTED,
  GET_PRODUCTS_SUCCESS,
  RESET_PRODUCTS,
} from './catalogActions';

import reducer from './catalogSlice';

const initialState = {
  productList: [],
  isLoading: false,
  errorMessage: null,
};

describe('catalog reducer tests', () => {
  test('must return a new state with the isLoading: true', () => {
    expect(
      reducer(initialState, { type: GET_PRODUCTS_STARTED }),
    ).toMatchObject({ isLoading: true });
  });

  test('must return a new state with the productList contains the passed payload and isLoading: false', () => {
    const payload = ['product 1', 'product 2'];
    expect(
      reducer(initialState, { type: GET_PRODUCTS_SUCCESS, payload }),
    ).toMatchObject({ productList: payload, isLoading: false });
  });

  test('must return a new state with an errorMessage contains the passed payload and isLoading: false', () => {
    const payload = 'error';
    expect(
      reducer(initialState, { type: GET_PRODUCTS_FAILURE, payload }),
    ).toMatchObject({ errorMessage: payload, isLoading: false });
  });

  test('must return a new state with productList contains an empty array', () => {
    expect(
      reducer(initialState, { type: RESET_PRODUCTS }),
    ).toMatchObject({ productList: [] });
  });
});
