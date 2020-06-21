import * as actionTypes from './actionTypes';
import {
	firestore,
	convertCollectionsInSnapshotToObject,
	googleProvider,
	auth,
} from '../firebase/firebase';
import history from '../history';

// User action creators
// action creators for google sign in
export const googleSigninStart = (userEmailAndPassword) => ({
	type: actionTypes.GOOGLE_SIGNIN_START,
	payload: userEmailAndPassword,
});
export const googleSigninSuccess = (userPayload) => ({
	type: actionTypes.GOOGLE_SIGNIN_SUCCESS,
	payload: userPayload,
});
export const googleSigninFailed = (errorMessage) => ({
	type: actionTypes.GOOGLE_SIGNIN_FAIL,
	payload: errorMessage,
});

// action creators for signing in with email and password
export const emailSigninStart = () => ({
	type: actionTypes.EMAIL_SIGNIN_START,
});
export const emailSigninSuccess = (userPayload) => ({
	type: actionTypes.EMAIL_SIGNIN_SUCCESS,
	payload: userPayload,
});
export const emailSigninFailed = (errorMessage) => ({
	type: actionTypes.EMAIL_SIGNIN_FAIL,
	payload: errorMessage,
});

export const signInWithGoogle = () => (dispatch) => {
	dispatch(googleSigninStart());
	auth
		.signInWithPopup(googleProvider)
		.then(({ user }) => {
			history.push('/');
			dispatch(googleSigninSuccess(user));
		})
		.catch((error) => dispatch(googleSigninFailed(error.message)));
};

export const signInWithEmailAndPassword = (email, password) => (dispatch) => {
	dispatch(emailSigninStart());
	auth
		.signInWithEmailAndPassword(email, password)
		.then(({ user }) => {
			history.push('/');
			dispatch(emailSigninSuccess(user));
		})
		.catch((error) => dispatch(emailSigninFailed(error.message)));
};

export const userSignout = () => (dispatch) => {
	auth.signOut();
	dispatch({
		type: actionTypes.USER_SIGN_OUT,
	});
};

export const checkUserAuth = () => (dispatch) => {
	dispatch(googleSigninStart());
	auth.onAuthStateChanged(async (user) => {
		if (user) {
			await dispatch(googleSigninSuccess(user));
		} else {
			dispatch(googleSigninFailed('User is not logged in'));
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
