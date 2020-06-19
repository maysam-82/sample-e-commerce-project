import { createSelector } from 'reselect';

// Create an input selector that does not use create selector.
// An input selector is a function which get the whole redux state and return a piece of it.
const selectCategory = (state) => state.category;

// Create an output selector which uses `createSelector` and input selectors.
export const selectCategoryItems = createSelector(
	[selectCategory],
	(categroy) => categroy.categoryItems
);
