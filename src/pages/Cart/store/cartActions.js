import CartAPI from '../../../utils/api/CartAPI';

export const ADD_PRODUCT_TO_THE_CART = 'ADD_PRODUCT_TO_THE_CART';
export const GET_CART_FROM_LOCALSTORAGE = 'GET_CART_FROM_LOCALSTORAGE';
export const GET_TOTAL_PRICE = 'GET_TOTAL_PRICE';
export const PURCHASE_STARTED = 'PURCHASE_STARTED';
export const PURCHASE_SUCCESS = 'PURCHASE_SUCCESS';
export const PURCHASE_FAILED = 'PURCHASE_FAILED';
export const CART_RESET = 'CART_RESET';

export const addProductToTheCart = (item) => (dispatch) => dispatch({
  type: ADD_PRODUCT_TO_THE_CART, payload: item,
});
export const getCartFromLocalStorage = () => (dispatch) => dispatch({
  type: GET_CART_FROM_LOCALSTORAGE,
});
export const getTotalPrice = () => (dispatch) => dispatch({ type: GET_TOTAL_PRICE });

export const purchase = (data) => async (dispatch, getState) => {
  const { token } = getState().auth.currentUser;
  dispatch({ type: PURCHASE_STARTED });

  return CartAPI.purchase(token, data)
    .then(() => dispatch({ type: PURCHASE_SUCCESS }))
    .catch((error) => dispatch({ type: PURCHASE_FAILED, payload: error }));
};

export const resetCart = () => (dispatch) => dispatch({ type: CART_RESET });
