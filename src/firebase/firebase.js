import firebase from 'firebase/app';
// for storage
import 'firebase/firestore';
// for auth
import 'firebase/auth';
// Your web app's Firebase configuration located inside `web app` that has already been created.
// {
// 	apiKey: '',
// 	authDomain: '',
// 	databaseURL: '',
// 	projectId: '',
// 	storageBucket: '',
// 	messagingSenderId: '',
// 	appId: '',
// };

import { config } from '../config';

firebase.initializeApp(config);

// take user data from auth library and store in database
export async function createUserProfileDocument(userAuth, additionalData) {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();
	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

// We always want to trigger the google popup whenever we use `GoogleAuthProvider` for authentication and sign-in
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
