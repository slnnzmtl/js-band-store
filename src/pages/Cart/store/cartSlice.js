import {
  ADD_PRODUCT_TO_THE_CART,
  GET_CART_FROM_LOCALSTORAGE,
  GET_TOTAL_PRICE,
  PURCHASE_STARTED,
  PURCHASE_SUCCESS,
  PURCHASE_FAILED,
  CART_RESET,
} from './cartActions';

const initialState = {
  list: [],
  count: 0,
  totalPrice: 0,
  purchaseResult: false,
  isLoading: false,
};

const addProductToTheCart = (list, item) => {
  const existing = list.find((elem) => elem.id === item.id);

  if (existing) {
    return list.map((book) => (book.id === existing.id ? item : book));
  }

  return [...list, item];
};

const getCartFromLocalStorage = (state) => {
  const local = localStorage.getItem('cart');
  if (state.list.length) return state;

  if (local) {
    return {
      ...state,
      list: JSON.parse(local),
    };
  }

  return state;
};

const counter = (accum, curr) => accum + curr;

const totalPrice = (list) => {
  const mapped = list.map((item) => item.price * item.quantity);
  return mapped.length && mapped.reduce(counter);
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_THE_CART: {
      const list = addProductToTheCart(state.list, action.payload);
      localStorage.setItem('cart', JSON.stringify(list));
      return { ...state, list };
    }

    case GET_CART_FROM_LOCALSTORAGE:
      return getCartFromLocalStorage(state);

    case GET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: totalPrice(state.list),
      };

    case PURCHASE_STARTED:
      return {
        ...state,
        isLoading: true,
      };

    case PURCHASE_SUCCESS:
      return {
        ...state,
        purchaseResult: true,
        isLoading: false,
      };

    case PURCHASE_FAILED:
      return {
        ...state,
        isLoading: false,
      };

    case CART_RESET: {
      localStorage.removeItem('cart');

      return {
        ...state,
        isLoading: false,
        purchaseResult: false,
        list: [],
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
