import {
  SET_CURRENT_USER,
  GET_CURRENT_USER_FROM_LOCAL,
  RESET_CURRENT_USER
} from "../../store/actionTypes";

const initialState = {
  currentUser: {},
};

const setCurrentUser = (state, data) => {
  
  localStorage.setItem("currentUser", JSON.stringify(data));

  return {
    ...state,
    currentUser: data
  };
};

const getCurrentUserFromLocal = state => {
  let local = localStorage.getItem("currentUser");

  return {
    ...state,
    currentUser: JSON.parse(local ? local : "{}")
  };
};

const resetCurrentUser = state => {
  localStorage.removeItem("currentUser");
  return {
    ...state,
    currentUser: {}
  }
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: 
      return setCurrentUser(state, action.data);
    case GET_CURRENT_USER_FROM_LOCAL: 
      return getCurrentUserFromLocal(state);
    case RESET_CURRENT_USER:
      return resetCurrentUser(state);
    default: 
      return false;
  }
};

export default loginReducer;