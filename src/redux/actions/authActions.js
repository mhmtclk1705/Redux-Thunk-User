import { SET_CURRENT_USER, CLEAR_CURRENT_USER } from "../types/authTypes"

//! Actionları tanımlıyoruz.


export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload : user
})
export const clearCurrentUser = () => ({
    type: CLEAR_CURRENT_USER,
})
