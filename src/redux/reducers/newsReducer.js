import { SET_NEWS_LIST, CLEAR_NEWS_LIST } from "../types/newsTypes";
//! Reducerları tanımlıyoruz

const initialState = {
  newsList: [],
};

export const newsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_NEWS_LIST:
      return { ...state, newsList: payload };
    case CLEAR_NEWS_LIST:
      return initialState.newsList;

    default:
      return state;
  }
};
