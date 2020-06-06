import * as actionTypes from './actionTypes';
export const setCurrentUser = (user) => (dispatch) => {
	dispatch({
		type: actionTypes.SET_CURRENT_USER_ID,
		payload: user.id,
	});
	dispatch({
		type: actionTypes.SET_CURRENT_USER_DATA,
		payload: { ...user.data },
	});
};