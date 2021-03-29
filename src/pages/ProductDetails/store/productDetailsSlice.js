import {
  GET_PRODUCT_DETAILS_FAILURE,
  GET_PRODUCT_DETAILS_STARTED,
  GET_PRODUCT_DETAILS_SUCCESS,
  RESET_PRODUCT_DETAILS,
} from './productDetailsActions';

const initialState = {
  productDetails: {},
  errorMessage: null,
};

const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS_STARTED:
      return {
        ...state,
        isLoading: true,
      };

    case GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        productDetails: action.payload,
        isLoading: false,
      };

    case GET_PRODUCT_DETAILS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
      };

    case RESET_PRODUCT_DETAILS:
      return {
        ...state,
        productDetails: {},
      };

    default:
      return state;
  }
};

export default productDetailsReducer;
