import API from '../../../utils/api/CatalogAPI';

export const ADD_GOOD_TO_THE_CART = 'ADD_GOOD_TO_THE_CART';
export const GET_PRODUCTS_STARTED = 'GET_PRODUCTS_STARTED';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';
export const RESET_PRODUCTS = 'RESET_PRODUCTS';

export const getProducts = () => async (dispatch, getState) => {
  const { token } = getState().auth.currentUser;

  dispatch({ type: GET_PRODUCTS_STARTED });
  try {
    const response = await API.getBooks(token);
    if (response.message) throw new Error(response.message);

    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAILURE,
      payload: error,
    });
  }
};

export const resetProducts = () => (dispatch) => dispatch({ type: RESET_PRODUCTS });
