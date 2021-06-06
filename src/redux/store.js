// This is the place where we create the Redux Store

import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

// All the middlewares that we need for the app.
const middlewares = [sagaMiddleware];

// Include Redux logger if working in a dev env
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

// Store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

//Persisted  version of the store
export const persistor = persistStore(store);
