import React, { useState } from 'react';
import classes from './signIn.module.scss';
import FormInput from '../FormInput/FormInput';

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
	return (
		<div className={classes.signIn}>
			<h2>I already have an acount</h2>
			<span>Sign in with your email and password</span>
			<form>
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
			</form>
		</div>
	);
}
