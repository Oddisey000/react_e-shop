export const addItemToCart = (cartItemsArray, newCartItem) => {
  // Look if this item is already in the cart, if condition don't meet variable will be undefined
  const existingCartItem = cartItemsArray.find(cartItem => cartItem.id === newCartItem.id);

  if (existingCartItem) {
    // Mapping througth array and modify quantity of product if this product exists
    return cartItemsArray.map(
      cartItem => cartItem.id === newCartItem.id
      ? {...cartItem, quantity: cartItem.quantity + 1} // If we have item then increase quantity by 1
      : cartItem // If we don't have this item, just return unmodified data
    );
  }

  // Return whole cart items with quantity property in case this item will first apear in the array
  // Return all cart items + newly added item inside one array
  return [...cartItemsArray, {...newCartItem, quantity: 1}];
}

export const removeItemFromTheCart = (cartItemsArray, cartItemToRemove) => {
  // Find exact id of the item from cart items array
  const cartItem = cartItemsArray.find(cartItem => cartItem.id === cartItemToRemove.id);

  // Delete if quantity of this cart item is 1
  if (cartItem.quantity === 1) {
    // Return all items, but not the one wich user decrease below 1
    return cartItemsArray.filter(item => item.id !== cartItemToRemove.id);
  }

  return cartItemsArray.map(
    cartItem => cartItem.id === cartItemToRemove.id
    ? {...cartItem, quantity: cartItem.quantity - 1} // If looked item in the array decrease quantity by 1
    : cartItem // Return all other items unchange
  );
}