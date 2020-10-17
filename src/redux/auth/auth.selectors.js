// Import reselect lib
import { createSelector } from 'reselect';

// Select user's authorization state
const selectUser = state => state.auth;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);