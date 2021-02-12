import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./main-components/App";
import { Provider } from "react-redux";
import store from "./store"

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App></App>
      </Router>
    </Provider>,
  document.getElementById("root")
);
