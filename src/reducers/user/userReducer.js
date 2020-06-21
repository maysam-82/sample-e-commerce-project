import * as actionTypes from '../../actions/actionTypes';
const INITIAL_STATE = {
	userData: null,
	errorMessage: undefined,
	isLoadingUser: false,
};

export default function userReducer(state = INITIAL_STATE, action) {
	const { type, payload } = action;
	switch (type) {
		case actionTypes.GOOGLE_SIGNIN_START:
		case actionTypes.EMAIL_SIGNIN_START:
			return {
				...state,
				errorMessage: undefined,
				isLoadingUser: true,
			};
		case actionTypes.GOOGLE_SIGNIN_SUCCESS:
		case actionTypes.EMAIL_SIGNIN_SUCCESS:
			return {
				...state,
				errorMessage: undefined,
				isLoadingUser: false,
				userData: payload,
			};
		case actionTypes.GOOGLE_SIGNIN_FAIL:
		case actionTypes.EMAIL_SIGNIN_FAIL:
			return {
				...state,
				errorMessage: payload,
				isLoadingUser: false,
			};
		case actionTypes.USER_SIGN_OUT:
			return {
				...state,
				errorMessage: '',
				isLoadingUser: false,
				userData: null,
			};
		default:
			return state;
	}
}
