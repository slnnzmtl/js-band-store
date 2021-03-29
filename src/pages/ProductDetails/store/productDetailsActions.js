import API from '../../../utils/api/CatalogAPI';

export const GET_PRODUCT_DETAILS_STARTED = 'GET_PRODUCT_DETAILS_STARTED';
export const GET_PRODUCT_DETAILS_SUCCESS = 'GET_PRODUCT_DETAILS_SUCCESS';
export const GET_PRODUCT_DETAILS_FAILURE = 'GET_PRODUCT_DETAILS_FAILURE';
export const RESET_PRODUCT_DETAILS = 'RESET_PRODUCT_DETAILS';

export const getProductDetails = (id) => async (dispatch, getState) => {
  const { token } = getState().auth.currentUser;

  dispatch({ type: GET_PRODUCT_DETAILS_STARTED });
  return API.getBookById(token, id)
    .then((response) => dispatch({ type: GET_PRODUCT_DETAILS_SUCCESS, payload: response }))
    .catch((error) => dispatch({ type: GET_PRODUCT_DETAILS_FAILURE, payload: error }));
};

export const resetProductDetails = () => (dispatch) => dispatch({ type: RESET_PRODUCT_DETAILS });
