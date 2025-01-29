import {ADD_USER}  from "./constants.js";


const intialState = {
  users: [],
};

function userReducer(state = intialState, action) {
  if (action.type === ADD_USER) {
    return { ...state, users: [...state.users, action.payload] };
  } else {
    return state;
  }
}

export default userReducer
