import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";

//! oluşturduğumuz store u import ediyoruz Provider ile sarmallamak için de redux dan Provider ı import ediyoruz

const container = document.getElementById("root");
const root = createRoot(container);
root.render(

<Provider store={store}>
<App />
</Provider>

);
