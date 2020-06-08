import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
	cartItems: [],
};

export default function cartReducer(state = INITIAL_STATE, action) {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.ADD_ITEM_TO_CART:
			return { ...state, cartItems: [...state.cartItems, payload] };

		default:
			return state;
	}
}
