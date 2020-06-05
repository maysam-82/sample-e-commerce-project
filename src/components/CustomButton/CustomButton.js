import React from 'react';
import classes from './customButton.module.scss';

export default function CustomButton({ children, ...customButtonProps }) {
	return (
		<button className={classes.customButton} {...customButtonProps}>
			{children}
		</button>
	);
}
