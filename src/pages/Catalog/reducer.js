import {
  GET_GOODS
} from "../../store/actionTypes";

const initialState = {
  goodsList: [],
};

const setGoodsList = (state, data) => {

  return {
    ...state,
    goodsList: data
  };
};

const catalogReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_GOODS: 
      return setGoodsList(state, action.data);
    
    default: 
      return state;
  }
};

export default catalogReducer;