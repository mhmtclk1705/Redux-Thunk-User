import { SET_CURRENT_USER, CLEAR_CURRENT_USER } from "../types/authTypes";
//! Reducerları tanımlıyoruz

const initialState = {
  currentUser: "",
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    case CLEAR_CURRENT_USER:
      return initialState.currentUser;

    default:
      return state;
  }
};
