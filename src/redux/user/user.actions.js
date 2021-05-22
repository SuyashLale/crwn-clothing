// This is where we define what actions are fired
// on the individual components

import { UserActionTypes } from "./user-action.types";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
