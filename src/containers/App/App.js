import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Home from '../../pages/Home';
import Shop from '../../pages/Shop';
import Header from '../Header';
import SignInSignUp from '../../pages/SignInSignUp';
import Checkout from '../../pages/Checkout';
import { checkUserAuth } from '../../actions/actionCreators';
import {
	selectCurrentUserData,
	selectIsAuthUser,
} from '../../reducers/user/userSelectors';
import Spinner from '../../components/Spinner';
import classes from './app.module.scss';

function App({ user, checkUserAuth, isLoading }) {
	const { uid: userId } = user || {};
	useEffect(() => {
		checkUserAuth();
	}, [checkUserAuth]);
	return (
		<div className={classes.appContainer}>
			<Spinner text="User Authorization" isLoading={isLoading} />
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/shop" component={Shop} />
				<Route exact path="/checkout" component={Checkout} />} />
				<Route
					path="/signin"
					render={() => (userId ? <Redirect to="/" /> : <SignInSignUp />)}
				/>
			</Switch>
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	user: selectCurrentUserData,
	isLoading: selectIsAuthUser,
});

export default connect(mapStateToProps, { checkUserAuth })(App);
