import * as actionTypes from '../../actions/actionTypes';

const INITIAL_STATE = {
	shoppingData: {},
};

function shopReducer(state = INITIAL_STATE, action) {
	const { type, payload } = action;

	switch (type) {
		case actionTypes.UPDATE_COLLECTIONS:
			return {
				...state,
				shoppingData: payload,
			};
		default:
			return state;
	}
}

export default shopReducer;
