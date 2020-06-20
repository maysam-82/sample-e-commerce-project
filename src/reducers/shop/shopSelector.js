import { createSelector } from 'reselect';

// Create an input selector that does not use create selector.
// An input selector is a function which get the whole redux state and return a piece of it.
const selectShop = (state) => state.shop;

// Create an output selector which uses `createSelector` and input selectors.
export const selectShoppingData = createSelector(
	[selectShop],
	(shop) => shop.shoppingData || []
);

// Create an ouput selector which returns a collection of data according to url param. passed in route.
// Curring means a function that returns another function
export const selectShoppingCollection = (collectionUrl) =>
	createSelector(
		[selectShoppingData],
		// Using data normalization to get data efficiently.
		(collections) => collections[collectionUrl]
	);

export const selectShoppingCollectionPreview = createSelector(
	[selectShoppingData],
	(collections) =>
		Object.keys(collections).map((collectionKey) => collections[collectionKey])
);

export const selectShoppingIsLoadingData = createSelector(
	[selectShop],
	(shop) => shop.isLoadingData
);
