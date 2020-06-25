import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import SignIn from '../../components/SignIn/SignIn';
import Signup from '../../components/Signup';
import Spinner from '../../components/Spinner';
import { selectIsFetchingUser } from '../../reducers/user/userSelectors';
import classes from './signInSignUp.module.scss';

function SignInSignUp({ isLoading }) {
	return (
		<div className={classes.signInSignUp}>
			<Spinner text="Signing-in Signing-up" isLoading={isLoading} />
			<SignIn />
			<Signup />
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsFetchingUser,
});

export default connect(mapStateToProps)(SignInSignUp);
