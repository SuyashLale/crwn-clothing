import { createSelector } from "reselect";

// Input selector for getting the 'directory' slice from the redux store.
const selectDirectory = (state) => state.directory;

// Selector for getting the sections from the directory slice.
export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
