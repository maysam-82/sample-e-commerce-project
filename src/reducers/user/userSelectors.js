import { createSelector } from 'reselect';

// Create an input selector that does not use create selector.
// An input selector is a function which get the whole redux state and return a piece of it.
const selectUser = (state) => state.users;

// Create an output selector which uses `createSelector` and input selectors.
export const selectCurrentUserId = createSelector(
	[selectUser],
	(user) => user.currentUserId
);
export const selectCurrentUserData = createSelector(
	[selectUser],
	(user) => user.currentUserData
);
