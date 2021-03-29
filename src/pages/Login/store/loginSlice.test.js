import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
  USER_LOGIN_STARTED,
} from './loginActions';

import loginReducer from './loginSlice';

const initialState = {
  currentUser: {},
  isLoading: false,
};

describe('login reducer test', () => {
  test('must return a new state with isLoading: true', () => {
    expect(
      loginReducer(initialState, { type: USER_LOGIN_STARTED }),
    ).toMatchObject({ isLoading: true });
  });

  test('must return a new state with isLoading: false', () => {
    expect(
      loginReducer(initialState, { type: USER_LOGIN_SUCCESS }),
    ).toMatchObject({ isLoading: false });
  });

  test('must return a new state with erorMessage: "error', () => {
    expect(
      loginReducer(initialState, { type: USER_LOGIN_FAILURE, payload: 'error' }),
    ).toMatchObject({ errorMessage: 'error' });
  });

  test('must return a new state with currentUser: {}', () => {
    expect(
      loginReducer(initialState, { type: USER_LOGOUT }),
    ).toMatchObject({ currentUser: {} });
  });
});
