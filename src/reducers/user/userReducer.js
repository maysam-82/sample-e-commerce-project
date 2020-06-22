import * as actionTypes from '../../actions/actionTypes';
const INITIAL_STATE = {
	userData: null,
	errorMessage: undefined,
	isLoadingUser: false,
};

export default function userReducer(state = INITIAL_STATE, action) {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.AUTH_START:
			return {
				...state,
				errorMessage: undefined,
				isLoadingUser: true,
			};
		case actionTypes.AUTH_SUCCESS:
			return {
				...state,
				errorMessage: undefined,
				isLoadingUser: false,
				userData: payload,
			};
		case actionTypes.AUTH_FAIL:
			return {
				...state,
				errorMessage: payload,
				isLoadingUser: false,
			};
		case actionTypes.USER_SIGN_OUT_SUCCESS:
			return {
				...state,
				errorMessage: '',
				isLoadingUser: false,
				userData: null,
			};
		case actionTypes.USER_SIGN_OUT_FAIL:
			return {
				...state,
				errorMessage: payload,
				isLoadingUser: false,
				userData: null,
			};
		default:
			return state;
	}
}
