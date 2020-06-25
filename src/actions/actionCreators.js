import * as actionTypes from './actionTypes';
import {
	firestore,
	convertCollectionsInSnapshotToObject,
	googleProvider,
	auth,
	createUserProfileDocument,
} from '../firebase/firebase';
import history from '../history';

export const signinSignupStart = () => ({
	type: actionTypes.SIGNIN_SIGNUP_START,
});
export const signinSignupSuccess = (userPayload) => ({
	type: actionTypes.SIGNIN_SIGNUP_SUCCESS,
	payload: userPayload,
});
export const signinSignupFailed = (errorMessage) => ({
	type: actionTypes.SIGNIN_SIGNUP_FAIL,
	payload: errorMessage,
});

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
	dispatch(signinSignupStart());
	auth
		.signInWithPopup(googleProvider)
		.then(({ user }) => {
			signinAfterSignup(user, user.displayName);
		})
		.catch((error) => dispatch(signinSignupFailed(error.message)));
};

export const signInWithEmailAndPassword = (email, password) => (dispatch) => {
	dispatch(signinSignupStart());
	auth
		.signInWithEmailAndPassword(email, password)
		.then(({ user }) => {
			history.push('/');
			dispatch(signinSignupSuccess(user));
		})
		.catch((error) => dispatch(signinSignupFailed(error.message)));
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
	dispatch(signinSignupStart());
	auth
		.createUserWithEmailAndPassword(email, password)
		.then(({ user }) => signinAfterSignup(user, displayName))
		.catch((error) => dispatch(signinSignupFailed(error.message)));
};

const signinAfterSignup = (user, displayName) => async (dispatch) => {
	const userRef = await createUserProfileDocument(user, { displayName });
	const userSnapshot = await userRef.get();
	dispatch({
		type: actionTypes.AUTH_SUCCESS,
		payload: { id: userSnapshot.id, ...userSnapshot.data() },
	});
};

export const checkUserAuth = () => (dispatch) => {
	dispatch(authStart());
	auth.onAuthStateChanged((user) => {
		if (user) dispatch(authSuccess(user));
		else {
			dispatch(authFailed('User is not logged in'));
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
