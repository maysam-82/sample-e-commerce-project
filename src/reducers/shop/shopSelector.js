import { createSelector } from 'reselect';

const COLLECTION_IDS = {
	hats: 1,
	sneakers: 2,
	jackets: 3,
	womens: 4,
	mens: 5,
};

// Create an input selector that does not use create selector.
// An input selector is a function which get the whole redux state and return a piece of it.
const selectShop = (state) => state.shop;

// Create an output selector which uses `createSelector` and input selectors.
export const selectShoppingData = createSelector(
	[selectShop],
	(shop) => shop.shoppingData
);

// Create an ouput selector which returns a collection of data according to url param. passed in route.
// Curring means a function that returns another function
export const selectShoppingCollection = (collectionUrl) =>
	createSelector([selectShoppingData], (collections) =>
		collections.find(
			(collection) => collection.id === COLLECTION_IDS[collectionUrl]
		)
	);
