import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import classes from './signInSignUp.module.scss';

export default function SignInSignUp() {
	return (
		<div className={classes.signInSignUp}>
			<SignIn />
		</div>
	);
}
