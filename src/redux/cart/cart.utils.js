export const addItemToCartHelper = (cartItems, newItem) => {
  //Check if the newItem that is being added already exists in the cart
  // based on the Item ID
  const itemExists = cartItems.find((cartItem) => cartItem.id === newItem.id);

  // If the itemExists is not undefined, then it means that its not a new Item,return a new array of cartItems so that react can re-render.
  // If undefined, meaning its a new item, add it with qty = 1
  if (itemExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...newItem, quantity: 1 }];
  }
};

//Helper function for "Remove-Item-From-Cart"
export const removeItemsHelper = (cartItems, itemToBeRemoved) => {
  //Check if the item to be removed exists in the cartItems array
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToBeRemoved.id
  );
  console.log("Called -- ", existingItem);
  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToBeRemoved.id);
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToBeRemoved.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};
