import firebase from 'firebase';
// for storage
import 'firebase/storage';
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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

// We always want to trigger the google popup whenever we use `GoogleAuthProvider` for authentication and sign-in
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
