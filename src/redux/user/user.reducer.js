// The reducer gets an initial state
// much like when we initialize our state in app.js.
const INITIAL_STATE = {
  currentUser: null,
};

// Reducer Function
// This function gets the current state of the app (before the action is fired)
// and the action which is fired as parameters.
// Depending on whether this reducer cares about the fired action, it either returns
// the new state object or the current state itself.
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
