import React from "react";
import "./App.css";
import TitleEcom from "./container/TitleEcom/TitleEcom";
import NavBar from "./container/NavBar/NavBar";
import Product from "./container/Product/Product";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <TitleEcom />
      <div className="layout">
        <NavBar />
        <Product />
      </div>
    </Provider>
  );
}

export default App;
