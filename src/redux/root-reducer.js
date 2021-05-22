import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

// The root reducer just combines all the individual reducers
// into one big state object for the App.

export default combineReducers({
  user: userReducer,
});
