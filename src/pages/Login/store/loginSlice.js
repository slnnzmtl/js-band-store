import {
  USER_LOGIN_STARTED,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
  GET_CURRENT_USER_FROM_LOCAL,
} from './loginActions';

const initialState = {
  currentUser: {},
  isLoading: false,
  errorMessage: null,
};

const getCurrentUserFromLocal = () => {
  const local = localStorage.getItem('currentUser');
  if (local) return JSON.parse(local);
  return {};
};

const resetCurrentUser = (state) => {
  localStorage.removeItem('currentUser');
  return {
    ...state,
    currentUser: {},
    isLoading: false,
    errorMessage: null,
  };
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_STARTED:
      return {
        ...state,
        isLoading: true,
      };

    case USER_LOGIN_SUCCESS:
      localStorage.setItem('currentUser', JSON.stringify(action.payload));
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
      };

    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };

    case GET_CURRENT_USER_FROM_LOCAL: {
      if (!state.currentUser || !state.currentUser.username) {
        return {
          ...state,
          currentUser: getCurrentUserFromLocal(),
        };
      }
      return state;
    }

    case USER_LOGOUT:
      return resetCurrentUser(state);

    default:
      return state;
  }
};

export default loginReducer;
