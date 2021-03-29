import {
  getProductDetails,
  resetProductDetails,
  GET_PRODUCT_DETAILS_FAILURE,
  GET_PRODUCT_DETAILS_SUCCESS,
  RESET_PRODUCT_DETAILS,
} from './productDetailsActions';
import { userLogin } from '../../Login/store/loginActions';
import store from '../../../store';

describe('product details actions tests', () => {
  test('must return an action of type GET_PRODUCT_DETAILS_FAILURE', async () => {
    expect(
      await store.dispatch(getProductDetails(1)),
    ).toMatchObject({ type: GET_PRODUCT_DETAILS_FAILURE });
  });

  test('must return an action of type GET_PRODUCT_DETAILS_SUCCESS', async () => {
    store.dispatch(userLogin('slnnzmtl'))
      .then(async () => {
        expect(
          await store.dispatch(getProductDetails(1)),
        ).toMatchObject({ type: GET_PRODUCT_DETAILS_SUCCESS });
      });
  });

  test('must return an action of type RESET_PRODUCT_DETAILS', async () => {
    expect(
      await store.dispatch(resetProductDetails()),
    ).toMatchObject({ type: RESET_PRODUCT_DETAILS });
  });
});
