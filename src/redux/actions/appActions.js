import { SET_LOADING, CLEAR_LOADING } from "../types/appTypes";

//! Actionları tanımlıyoruz.

export const setLoading = () => ({
  type: SET_LOADING,
})
export const clearLoading = () => ({
  type: CLEAR_LOADING,
})

