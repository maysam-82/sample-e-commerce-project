import React from 'react';
import ReactDOM from 'react-dom';
import classes from './spinner.module.scss';

const Spinner = ({ text, isLoading }) => {
	return ReactDOM.createPortal(
		isLoading ? (
			<div className={classes.spinnerContainer}>
				<div className={classes.spinner}>
					<div className={classes.spinnerLine}></div>
					<div className={classes.spinnerLine}></div>
					<div className={classes.spinnerLine}></div>
					<div className={classes.spinnerLine}></div>
					<div className={classes.spinnerLine}></div>
					<div className={classes.spinnerLine}></div>
					{text ? <p>{text}</p> : null}
				</div>
			</div>
		) : null,
		document.querySelector('#spinner')
	);
};

export default Spinner;
