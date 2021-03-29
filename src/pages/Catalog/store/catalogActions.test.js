import {
  getProducts,
  resetProducts,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS,
  RESET_PRODUCTS,
} from './catalogActions';

import { userLogin } from '../../Login/store/loginActions';

import store from '../../../store';

describe('catalog actions tests', () => {
  test('must return an action of type GET_PRODUCTS_FAILURE', async () => {
    expect(
      await store.dispatch(getProducts()),
    ).toMatchObject({ type: GET_PRODUCTS_FAILURE });
  });

  test('must return an action of type GET_PRODUCTS_SUCCESS', async () => {
    store.dispatch(userLogin('slnnzmtl'))
      .then(async () => {
        expect(
          await store.dispatch((getProducts())),
        ).toMatchObject({ type: GET_PRODUCTS_SUCCESS });
      });
  });

  test('must return an action of type RESET_PRODUCTS', async () => {
    expect(
      await store.dispatch(resetProducts()),
    ).toMatchObject({ type: RESET_PRODUCTS });
  });
});
