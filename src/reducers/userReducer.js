import * as actionTypes from '../actions/actionTypes';
const INITIAL_STATE = {
	currentUserId: '',
	currentUserData: null,
};

export default function userReducer(state = INITIAL_STATE, action) {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.SET_CURRENT_USER_ID:
			return {
				...state,
				currentUserId: payload,
			};
		case actionTypes.SET_CURRENT_USER_DATA:
			return {
				...state,
				currentUserData: payload,
			};
		default:
			return state;
	}
}
