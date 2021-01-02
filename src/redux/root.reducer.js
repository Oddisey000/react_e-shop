// Imports from global libraries
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// Local storage under the hood of redux-persist librarie
import storage from 'redux-persist/lib/storage';

// Imports custom variables
import authReducer from './auth/auth.reducer';
import cartReducer from './cart/cart.reducer';

// Variables
/**
 * Key for accessing default local storage object
 * The object itself
 * whitelist is the data which need to be in the persistant array
 */
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer
});

// Let redux-persist handle local storage and global reducer of the application
export default persistReducer(persistConfig, rootReducer);