import React from 'react';
import CustomButton from '../CustomButton';
import classes from './cartDropdown.module.scss';

function CartDropdown({ isShown }) {
	console.log(isShown);
	return isShown ? (
		<div className={classes.cartDropdown}>
			<div className={classes.cartItems} />
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	) : null;
}

export default CartDropdown;
