import React, { useState } from 'react';
import classes from './signIn.module.scss';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import { signInWithGoogle, auth } from '../../firebase/firebase';

export default function SignIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	function handleChange({ target: { name, value } }) {
		if (name === 'email') {
			setEmail(value);
		} else {
			setPassword(value);
		}
	}
	async function handleSubmit(event) {
		event.preventDefault();
		try {
			await auth.signInWithEmailAndPassword(email, password);
			setPassword('');
			setEmail('');
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div className={classes.signIn}>
			<h2>I already have an acount</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					type="email"
					value={email}
					required
					handleChange={handleChange}
					name="email"
					label="email"
				/>
				<FormInput
					type="password"
					value={password}
					required
					handleChange={handleChange}
					name="password"
					label="password"
					autoComplete="false"
				/>
				<div className={classes.buttons}>
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignedIn>
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
}
