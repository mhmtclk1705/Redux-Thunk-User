import axios from "axios";
import { setLoading, clearLoading } from "../actions/appActions";
import { setNewsList } from "../actions/newsActions";


const url ="https://gnews.io/api/v4/search?q=example&token=f60ab83a182d2a6217cd15bc87f2ba3e"


// "https://newsapi.org/v2/everything?" +
// "q=apple&" +
// "from=2022-05-01&" +
// "to=2022-05-01&" +
// "sortBy=popularity&" +
// "apiKey=62394115e9ff4a768ce424837b911c2b";

//! getNews fonksiyonu başka bir fonksiyonu döndürüyor. 
//! Bu durumda çağırırken dispatch(getNews()) şeklinde kullanmak gerekir.

export const getNews = () => {
    return async (dispatch) => {
try {
  dispatch(setLoading());
  const { data } = await axios(url);
  // console.log(data.articles);
  dispatch(setNewsList(data.articles));
} catch (error) {
  console.log(error);
} finally {
  dispatch(clearLoading());
}
    }
};


// ! bu kullanımda getNews bir değişken gibi düşünülebilir 
//! News tarafında dispatch(getNews) şeklinde çağırılır...

// export const getNews = async (dispatch) => {
// try {
//   dispatch(setLoading());
//   const { data } = await axios(url);
//   // console.log(data.articles);
//   dispatch(setNewsList(data.articles));
// } catch (error) {
//   console.log(error);
// } finally {
//   dispatch(clearLoading());
// }
// };