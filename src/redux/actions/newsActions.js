import { SET_NEWS_LIST, CLEAR_NEWS_LIST } from "../types/newsTypes"

//! Actionları tanımlıyoruz.


export const setNewsList = (news) => ({
  type: SET_NEWS_LIST,
  payload: news
})

export const cLearNewsList = () => ({
  type: CLEAR_NEWS_LIST,
})
