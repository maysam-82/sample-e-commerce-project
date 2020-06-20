import * as actionTypes from './actionTypes';
import {
	firestore,
	convertCollectionsInSnapshotToObject,
} from '../firebase/firebase';
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

export const addToCart = (shoppingItem) => (dispatch) => {
	dispatch({
		type: actionTypes.ADD_ITEM_TO_CART,
		payload: shoppingItem,
	});
};

export const displayCartDropdown = () => (dispatch) => {
	dispatch({
		type: actionTypes.SHOW_CART_DROPDOWN,
	});
};

export const removeFromCart = (cartItemId) => (dispatch) => {
	dispatch({
		type: actionTypes.REMOVE_ITEM_FROM_CART,
		payload: cartItemId,
	});
};

export const decreaseFromCart = (shoppingItem) => (dispatch) => {
	dispatch({
		type: actionTypes.DECREASE_FROM_CART,
		payload: shoppingItem,
	});
};

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
