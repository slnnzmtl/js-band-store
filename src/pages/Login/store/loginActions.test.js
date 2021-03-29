import {
  userLogin,
  logoutUser,
  getUserFromLocalStorage,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
  GET_CURRENT_USER_FROM_LOCAL,
} from './loginActions';
import store from '../../../store';

describe('login actions', () => {
  test('user login success', async () => {
    expect(
      await store.dispatch(userLogin('test')),
    ).toMatchObject({ type: USER_LOGIN_SUCCESS });
  });

  test('user login failure', async () => {
    expect(
      await store.dispatch(userLogin()),
    ).toMatchObject({ type: USER_LOGIN_FAILURE });
  });

  test('user logout', () => {
    expect(
      store.dispatch(logoutUser()),
    ).toEqual({ type: USER_LOGOUT });
  });

  test('get user from localstorage', () => {
    expect(
      store.dispatch(getUserFromLocalStorage()),
    ).toEqual({ type: GET_CURRENT_USER_FROM_LOCAL });
  });
});
