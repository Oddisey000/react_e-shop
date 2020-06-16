export const addItemToCart = (cartItemsArray, newCartItem) => {
  // Look if this item is already in the cart, if condition don't meet variable will be undefined
  const existingCartItem = cartItemsArray.find(cartItem => cartItem.id == newCartItem.id);

  if (existingCartItem) {
    // Mapping througth array and modify quantity of product if this product exists
    return cartItemsArray.map(
      cartItem => cartItem.id == newCartItem.id
      ? {...cartItem, quantity: cartItem.quantity + 1} // If we have item then increase quantity by 1
      : cartItem // If we don't have this item, just return unmodified data
    );
  }
}