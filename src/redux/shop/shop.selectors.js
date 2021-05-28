import { createSelector } from "reselect";

// Input selector for getting the 'shop' slice from the redux store
const selectShop = (state) => state.shop;

// Output selector to get the collections from the shop
export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// Output selector for CollectionsPreview.
// Object.keys --> gives the keys in the collections Object into an array
// [hats, sneakers, jackets, womens, mens]
// Invoke map on this array to output the value of the object at the 'key' in collections.
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

// Selector to match and return the collection based on the url params passed
export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );
