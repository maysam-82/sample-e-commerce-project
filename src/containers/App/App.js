import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Home from '../../pages/Home';
import Shop from '../../pages/Shop';
import Header from '../Header';
import SignInSignUp from '../../pages/SignInSignUp';
import Checkout from '../../pages/Checkout';
import { auth, createUserProfileDocument } from '../../firebase/firebase';
import { setCurrentUser } from '../../actions/actionCreators';
import { selectCurrentUserId } from '../../reducers/user/userSelectors';
import classes from './app.module.scss';

function App({ setCurrentUser, currentUserId }) {
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
				<Route exact path="/" component={Home} />
				<Route path="/shop" component={Shop} />
				<Route exact path="/checkout" component={Checkout} />} />
				<Route
					path="/signin"
					render={() =>
						currentUserId ? <Redirect to="/" /> : <SignInSignUp />
					}
				/>
			</Switch>
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	currentUserId: selectCurrentUserId,
});

export default connect(mapStateToProps, { setCurrentUser })(App);
