import { createSelector } from 'reselect';

// Create an input selector that does not use create selector.
// An input selector is a function which get the whole redux state and return a piece of it.
const selectCart = (state) => state.cart;

// Create an output selector which uses `createSelector` and input selectors.
export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	(cartItems) =>
		// 0 as initial accumulator value
		cartItems.reduce(
			(accumulatedQuantity, cartItem) =>
				accumulatedQuantity + cartItem.quantity,
			0
		)
);

export const selectCartHidden = createSelector(
	[selectCart],
	(cart) => cart.isCartDropdownHidden
);
