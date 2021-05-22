// This is where we define what actions are fired
// on the individual components
export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});
