import React from 'react';
import withSpinner from '../../hoc/withSpinner/withSpinner';
import SignIn from '../../components/SignIn/SignIn';
import Signup from '../../components/Signup';
import classes from './signInSignUp.module.scss';

function SignInSignUp() {
	return (
		<div className={classes.signInSignUp}>
			<SignIn />
			<Signup />
		</div>
	);
}

export default withSpinner(SignInSignUp);
