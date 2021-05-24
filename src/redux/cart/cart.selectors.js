import { createSelector } from "reselect";

// Input selector, that extracts a slice of the redux store/entire state.
const selectCart = (state) => state.cart;

//Output selector for selecting the hidden property of the cart dropdown
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

// Output selector, that uses an input selector and the createSelector function from
// reselect library.
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// Selector for calculating the total items in the cart
export const cartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQty, cartItem) => accumulatedQty + cartItem.quantity,
    0
  )
);

//Selector for calculating the Grand Total for the items in the cart
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedValue, cartItem) =>
      cartItem.quantity * cartItem.price + accumulatedValue,
    0
  )
);
