// The reducer gets an initial state
// much like when we initialize our state in app.js.
import UserActionTypes from "./user-action.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

// Reducer Function
// This function gets the current state of the app (before the action is fired)
// and the action which is fired as parameters.
// Depending on whether this reducer cares about the fired action, it either returns
// the new state object or the current state itself.
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UserActionTypes.CHECK_USER_SESSION:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.SIGN_OUT_START:
      return {
        ...state,
        error: null,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        error: null,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default userReducer;
