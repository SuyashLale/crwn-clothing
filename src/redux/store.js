// This is the place where we create the Redux Store

import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// All the middlewares that we need for the app.
const middlewares = [logger];

// Store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
