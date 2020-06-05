import React from 'react';
import classes from './formInput.module.scss';

export default function FormInput({
	handleChange,
	label,
	value,
	...inputProps
}) {
	return (
		<div className={classes.formGroup}>
			<input
				className={classes.formInput}
				onChange={handleChange}
				{...inputProps}
				value={value}
			/>
			{label ? (
				<label
					className={`${value ? classes.shrink : ''} ${classes.formInputLabel}`}
				>
					{label}
				</label>
			) : null}
		</div>
	);
}
