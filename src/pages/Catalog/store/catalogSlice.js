import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_STARTED,
  GET_PRODUCTS_SUCCESS,
  RESET_PRODUCTS,
} from './catalogActions';

const initialState = {
  productList: [],
  errorMessage: null,
};

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_STARTED:
      return {
        ...state,
        isLoading: true,
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        productList: action.payload,
        isLoading: false,
      };

    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
      };

    case RESET_PRODUCTS:
      return {
        ...state,
        productList: [],
      };

    default:
      return state;
  }
};

export default catalogReducer;
