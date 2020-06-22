import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
// import { auth, createUserProfileDocument } from '../../firebase/firebase';
import { signup } from '../../actions/actionCreators';
import classes from './signup.module.scss';

function Signup({ signup }) {
	const [signUpData, setSignUpData] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	function handleChange({ target: { name, value } }) {
		setSignUpData({ ...signUpData, [name]: value });
	}
	function handleSubmit(event) {
		const { displayName, email, password, confirmPassword } = signUpData;
		event.preventDefault();
		if (password !== confirmPassword) {
			alert('passwords do not match');
			return;
		}
		signup(email, password, displayName);
		setSignUpData({
			...signUpData,
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		});
	}
	const { displayName, email, password, confirmPassword } = signUpData;
	return (
		<div className={classes.signup}>
			<h2 className={classes.title}>I do not have an account</h2>
			<span>Sign up with your email and password</span>
			<form className={classes.signupForm} onSubmit={handleSubmit}>
				<FormInput
					type="text"
					value={displayName}
					required
					handleChange={handleChange}
					name="displayName"
					label="name"
				/>
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
				<FormInput
					type="password"
					value={confirmPassword}
					required
					handleChange={handleChange}
					name="confirmPassword"
					label="confirm password"
					autoComplete="false"
				/>
				<div className={classes.buttons}>
					<CustomButton type="submit">Sign Up</CustomButton>
				</div>
			</form>
		</div>
	);
}

export default connect(null, { signup })(Signup);
