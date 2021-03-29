import {
  GET_PRODUCT_DETAILS_FAILURE,
  GET_PRODUCT_DETAILS_STARTED,
  GET_PRODUCT_DETAILS_SUCCESS,
  RESET_PRODUCT_DETAILS,
} from './productDetailsActions';

import reducer from './productDetailsSlice';

const initialState = {
  productDetails: {},
  isLoading: false,
  errorMessage: null,
};

describe('product details reducer tests', () => {
  test('must return a new state with the isLoading: true', () => {
    expect(
      reducer(initialState, { type: GET_PRODUCT_DETAILS_STARTED }),
    ).toMatchObject({ isLoading: true });
  });

  test('must return a new state with the isLoading: false and productDetails contains the passed payload', () => {
    const payload = 'product details';
    expect(
      reducer(initialState, { type: GET_PRODUCT_DETAILS_SUCCESS, payload }),
    ).toMatchObject({ isLoading: false, productDetails: payload });
  });

  test('must return a new state with the isLoading: false and errorMessage contains the passed payload', () => {
    const payload = 'error message';
    expect(
      reducer(initialState, { type: GET_PRODUCT_DETAILS_FAILURE, payload }),
    ).toMatchObject({ isLoading: false, errorMessage: payload });
  });

  test('must return a new state contains the productDetails: {}', () => {
    expect(
      reducer(initialState, { type: RESET_PRODUCT_DETAILS }),
    ).toMatchObject({ productDetails: {} });
  });
});
