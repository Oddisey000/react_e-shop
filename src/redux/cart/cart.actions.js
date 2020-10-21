import {
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM
} from './cart.types';

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
});

export const addCartItem = cartItem => ({
  type: ADD_CART_ITEM,
  payload: cartItem
});

export const removeItem = cartItem => ({
  type: REMOVE_ITEM,
  payload: cartItem
});

export const clearItemFromCart = cartItem => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: cartItem
});