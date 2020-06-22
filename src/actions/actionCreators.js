import * as actionTypes from './actionTypes';
import {
	firestore,
	convertCollectionsInSnapshotToObject,
	googleProvider,
	auth,
	createUserProfileDocument,
} from '../firebase/firebase';
import history from '../history';

// User action creators
// action creators for google sign in
export const authStart = () => ({
	type: actionTypes.AUTH_START,
});
export const authSuccess = (userPayload) => ({
	type: actionTypes.AUTH_SUCCESS,
	payload: userPayload,
});
export const authFailed = (errorMessage) => ({
	type: actionTypes.AUTH_FAIL,
	payload: errorMessage,
});

export const signInWithGoogle = () => (dispatch) => {
	dispatch(authStart());
	auth
		.signInWithPopup(googleProvider)
		.then(({ user }) => {
			createUserProfile(user, user.displayName);
		})
		.catch((error) => dispatch(authFailed(error.message)));
};

export const signInWithEmailAndPassword = (email, password) => (dispatch) => {
	dispatch(authStart());
	auth
		.signInWithEmailAndPassword(email, password)
		.then(({ user }) => {
			history.push('/');
			dispatch(authSuccess(user));
		})
		.catch((error) => dispatch(authFailed(error.message)));
};

export const userSignout = () => (dispatch) => {
	auth
		.signOut()
		.then((response) =>
			dispatch({
				type: actionTypes.USER_SIGN_OUT_SUCCESS,
			})
		)
		.catch((error) =>
			dispatch({ type: actionTypes.USER_SIGN_OUT_FAIL, payload: error.message })
		);
};

export const signup = (email, password, displayName) => async (dispatch) => {
	dispatch(authStart());
	auth
		.createUserWithEmailAndPassword(email, password)
		.then(({ user }) => createUserProfile(user, displayName))
		.catch((error) => dispatch(authFailed(error.message)));
};

const createUserProfile = (user, displayName) => {
	createUserProfileDocument(user, { displayName }).then((response) => {
		checkUserAuth();
		history.push('/');
	});
};

export const checkUserAuth = () => (dispatch) => {
	dispatch(authStart());
	auth.onAuthStateChanged(async (user) => {
		if (user) {
			await dispatch(authSuccess(user));
		} else {
			dispatch(authFailed('User is not logged in'));
			history.push('/');
		}
	});
};

// Cart action creators
export const addToCart = (shoppingItem) => ({
	type: actionTypes.ADD_ITEM_TO_CART,
	payload: shoppingItem,
});

export const displayCartDropdown = () => ({
	type: actionTypes.SHOW_CART_DROPDOWN,
});

export const removeFromCart = (cartItemId) => ({
	type: actionTypes.REMOVE_ITEM_FROM_CART,
	payload: cartItemId,
});

export const decreaseFromCart = (shoppingItem) => (dispatch) => {
	dispatch({
		type: actionTypes.DECREASE_FROM_CART,
		payload: shoppingItem,
	});
};

// Shop action creators
const fetchCollectionsStart = () => {
	return {
		type: actionTypes.FETCH_COLLECTIONS_START,
	};
};
const fetchCollectionsSuccess = (collections) => ({
	type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collections,
});
const fetchCollectionsFailed = (errorMessage) => ({
	type: actionTypes.FETCH_COLLECTIONS_FAIL,
	payload: errorMessage,
});

export const fetchCollections = () => (dispatch) => {
	const collectionRef = firestore.collection('collections');
	dispatch(fetchCollectionsStart());
	collectionRef
		.get()
		.then((snapshot) => {
			const collections = convertCollectionsInSnapshotToObject(snapshot);
			dispatch(fetchCollectionsSuccess(collections));
		})
		.catch((error) => dispatch(fetchCollectionsFailed(error.message)));
};
