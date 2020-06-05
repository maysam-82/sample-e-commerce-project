import React from 'react';
import classes from './customButton.module.scss';

export default function CustomButton({
	children,
	isGoogleSignedIn,
	...customButtonProps
}) {
	let customButtonClass = [classes.customButton];
	if (isGoogleSignedIn) {
		customButtonClass = [...customButtonClass, classes.googleSignedIn];
	}
	return (
		<button className={customButtonClass.join(' ')} {...customButtonProps}>
			{children}
		</button>
	);
}
