import React from 'react';
import classes from './customButton.module.scss';

export default function CustomButton({
	colorInverted,
	children,
	isGoogleSignedIn,
	...customButtonProps
}) {
	let customButtonClass = [classes.customButton];
	if (isGoogleSignedIn) {
		customButtonClass = [...customButtonClass, classes.googleSignedIn];
	}
	if (colorInverted) {
		customButtonClass = [...customButtonClass, classes.colorInverted];
	}
	return (
		<button className={customButtonClass.join(' ')} {...customButtonProps}>
			{children}
		</button>
	);
}
