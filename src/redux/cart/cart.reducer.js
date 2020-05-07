import INITIAL_STATE from '../root.state';
import { TOGGLE_CART_HIDDEN } from './cart.types';

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        // Return opposite value of visibility of cart
        cartHidden: !state.cartHidden
      };
    default:
      return state;
  }
}

export default cartReducer;