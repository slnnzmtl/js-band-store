import API from '../../../utils/api/AuthAPI';

export const GET_CURRENT_USER_FROM_LOCAL = 'GET_CURRENT_USER_FROM_LOCAL';
export const USER_LOGIN_STARTED = 'USER_LOGIN_STARTED';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const USER_LOGOUT = 'USER_LOGOUT';

export const userLogin = (username) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_STARTED });

  return API.login(username)
    .then((response) => dispatch({ type: USER_LOGIN_SUCCESS, payload: response }))
    .catch((error) => dispatch({
      type: USER_LOGIN_FAILURE,
      payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
    }));
};

export const logoutUser = () => (dispatch) => dispatch({ type: USER_LOGOUT });

export const getUserFromLocalStorage = () => (dispatch) => dispatch({
  type: GET_CURRENT_USER_FROM_LOCAL,
});
