import CartActionTypes from "./cart-action.types";

// Action: Show/Hide the CartDropDown Component
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

// Action: Add Item to cart
export const addItemToCart = (item) => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: item,
});

// Action: Remove Item from cart
export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

//Action: Remove Item from cart
export const removeItemFromCart = (item) => ({
  type: CartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});
