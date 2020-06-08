import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/icons/shopping_bag.svg';
import classes from './cartIcon.module.scss';

function CartIcon() {
	return (
		<div className={classes.cartIcon}>
			<ShoppingIcon className={classes.shoppingIcon} />
			<span className={classes.itemCount}>0</span>
		</div>
	);
}

export default CartIcon;
