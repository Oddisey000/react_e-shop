// Import required libraries
import { createSelector } from 'reselect';

// Variable which takes cart item from the state
const selectCart = state => state.cart;

// The first argument should be array of data, the second part of the data which wee want to select
// This is the Menoization procedure, for not rerendering components each time
export const createCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// Selector don't hase to be the whole state, it could be more specific part of the state
export const selectCartItemsCount = createSelector(
  [createCartItems],
  (cartItems) => cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0
  )
);

// Selector for hidden cart
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.cartHidden
);

// Selector for total cart items
export const selectCartItemsTotal = createSelector(
  [createCartItems],
  (cartItems) => cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price, 0
  )
);