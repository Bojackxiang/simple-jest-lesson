import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import TodoList from "./containers/TodoList/";
import store from "./store/createStore";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <TodoList />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
