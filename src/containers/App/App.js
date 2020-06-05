import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import menuItems from '../../data/menuItems.data';
import shopData from '../../data/shop.data';
import Shop from '../../pages/Shop/Shop';
import Header from '../../components/Header/Header';
import SignInSignUp from '../../pages/SignInSignUp';
import { auth, createUserProfileDocument } from '../../firebase/firebase';
import classes from './app.module.scss';

function App() {
	const [currentUserId, setCurrentUserId] = useState('');
	const [currentUserData, setCurrentUserData] = useState(null);
	useEffect(() => {
		// `onAuthStateChanged` observer will Get the currently signed-in user. This is an open messaging system or listener between firebase and application. This connection always opens
		// while application is mounted.
		// if (user) {
		// User is signed in.
		// } else {
		// No user is signed in.
		// }
		// By the use of `onAuthStateChanged` we do not need to fetch
		// manually everytime we are going to check if the status changed.
		const authonAuthStateChanged = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapshot) => {
					setCurrentUserId(snapshot.id);
					setCurrentUserData({
						...snapshot.data(),
					});
				});
			} else {
				setCurrentUserId('');
				setCurrentUserData(null);
			}
		});

		// We need to close this connection whenever we do not want it.
		// If useEffect returns a function, React will run it when it is time to clean up.
		// Acts like componentWillUnmount lifecycle hook.
		return function cleanup() {
			authonAuthStateChanged();
		};
	}, [currentUserId]);
	console.log(currentUserData);
	return (
		<div className={classes.appContainer}>
			<Header currentUserData={currentUserData} />
			<Switch>
				<Route exact path="/" render={() => <Home menuItems={menuItems} />} />
				<Route path="/shop" render={() => <Shop shopData={shopData} />} />
				<Route path="/signin" component={SignInSignUp} />
			</Switch>
		</div>
	);
}

export default App;
