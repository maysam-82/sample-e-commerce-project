import { createSelector } from 'reselect';

// Create an input selector that does not use create selector.
// An input selector is a function which get the whole redux state and return a piece of it.
const selectShop = (state) => state.shop;

// Create an output selector which uses `createSelector` and input selectors.
export const selectShoppingData = createSelector(
	[selectShop],
	(shop) => shop.shoppingData
);
