import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
// ! kombine ettiğimiz reducerları store içerisinde tanımlayacağız...
// ! bunun için createstore u import ediyoruz

// ! oluşturduğumuz rootReducer ı store içine atıyoruz.

//! eğer development modda ise redux devtools ile redux store'ımızı gösteriyoruz.
let store;
if (process.env.NODE_ENV === "development") {
  store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
  //! değilse normal bi şekilde middleware ile redux store'ımızı oluşturuyoruz.
} else {
  store = createStore(rootReducer, applyMiddleware(thunk));
}



export default store;


