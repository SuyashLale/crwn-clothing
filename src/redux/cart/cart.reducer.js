import { CartActionTypes } from "./cart-action.types";
import { addItemToCartHelper } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCartHelper(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
