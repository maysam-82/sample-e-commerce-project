import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../../pages/Home';
import menuItems from '../../data/menuItems.data';
import shopData from '../../data/shop.data';
import Shop from '../../pages/Shop/Shop';
import Header from '../../components/Header/Header';
import SignInSignUp from '../../pages/SignInSignUp';
import { auth, createUserProfileDocument } from '../../firebase/firebase';
import classes from './app.module.scss';
import { setCurrentUser } from '../../actions/actionCreators';

function App({ setCurrentUser }) {
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
			let user = {
				id: '',
				data: {},
			};
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapshot) => {
					user.id = snapshot.id;
					user.data = { ...snapshot.data() };
					setCurrentUser(user);
				});
			} else {
				user.id = '';
				user.data = {};

				setCurrentUser(user);
			}
		});

		// We need to close this connection whenever we do not want it.
		// If useEffect returns a function, React will run it when it is time to clean up.
		// Acts like componentWillUnmount lifecycle hook.
		return function cleanup() {
			authonAuthStateChanged();
		};
	});
	return (
		<div className={classes.appContainer}>
			<Header />
			<Switch>
				<Route exact path="/" render={() => <Home menuItems={menuItems} />} />
				<Route path="/shop" render={() => <Shop shopData={shopData} />} />
				<Route path="/signin" component={SignInSignUp} />
			</Switch>
		</div>
	);
}

export default connect(null, { setCurrentUser })(App);
