import INITIAL_STATE from '../root.state';
import {
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM
} from './cart.types';
import { addItemToCart, removeItemFromTheCart } from './cart.utils';

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        // Return opposite value of visibility of cart
        cartHidden: !state.cartHidden
      };
    case ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromTheCart(state.cartItems, action.payload)
      };
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        // Filter will return all true results, so there is only one item id wich not gonna return
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      }
    default:
      return state;
  }
}

export default cartReducer;