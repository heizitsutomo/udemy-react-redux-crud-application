import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import reducer from "./reducers";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

const store = createStore(reducer);

ReactDOM.reder(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
