import * as actionTypes from '../../actions/actionTypes';

const INITIAL_STATE = {
	shoppingData: null,
	isLoadingData: false,
	errorMessage: undefined,
};

function shopReducer(state = INITIAL_STATE, action) {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.FETCH_COLLECTIONS_SUCCESS:
			return {
				...state,
				shoppingData: payload,
				isLoadingData: false,
			};
		case actionTypes.FETCH_COLLECTIONS_START:
			return {
				...state,
				isLoadingData: true,
			};
		case actionTypes.FETCH_COLLECTIONS_FAIL:
			return {
				...state,
				isLoadingData: false,
				errorMessage: payload,
			};
		default:
			return state;
	}
}

export default shopReducer;
