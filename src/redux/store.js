// This is the place where we create the Redux Store

import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// All the middlewares that we need for the app.
const middlewares = [logger];

// Store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//Persisted  version of the store
export const persistor = persistStore(store);
