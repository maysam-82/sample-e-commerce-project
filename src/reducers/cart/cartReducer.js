import * as actionTypes from '../../actions/actionTypes';
import { addQuantityBeforeAddItem } from '../utilities/cartUtilities';

const INITIAL_STATE = {
	cartItems: [],
	isCartDropdownHidden: false,
};

export default function cartReducer(state = INITIAL_STATE, action) {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.ADD_ITEM_TO_CART:
			return {
				...state,
				cartItems: addQuantityBeforeAddItem(state.cartItems, payload),
			};
		case actionTypes.SHOW_CART_DROPDOWN:
			const currentDropdownVisibility = state.isCartDropdownHidden;
			return {
				...state,
				isCartDropdownHidden: !currentDropdownVisibility,
			};
		default:
			return state;
	}
}
