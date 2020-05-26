import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { reducer as classesReducer } from "./reducers/classes";
import { reducer as studentReducer } from "./reducers/studentClasses";
import { reducer as categoriesReducer } from "./reducers/categories";

import App from "./App";

const rootReducer = combineReducers({
  studentClasses: studentReducer,
  classes: classesReducer,
  categories: categoriesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);