import { createSelector } from "reselect";

// Input selector for getting the 'shop' slice from the redux store
const selectShop = (state) => state.shop;

// Output selector to get the collections from the shop
export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// Selector to match and return the collection based on the url params passed
export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );
