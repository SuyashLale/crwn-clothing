import { createSelector } from "reselect";

// Input selector for selecting the user slice fron the redux store
export const selectUser = (state) => state.user;

// Output selector for selecting the current user
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
