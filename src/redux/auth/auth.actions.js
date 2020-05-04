import { SET_CURRENT_USER } from './auth.types';

export const setCurrentUser = userObj => ({
  type: SET_CURRENT_USER,
  payload: userObj
});