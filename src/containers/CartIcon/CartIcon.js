import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/icons/shopping_bag.svg';
import classes from './cartIcon.module.scss';

function CartIcon({ cartItemsCount }) {
	return (
		<div className={classes.cartIcon}>
			<ShoppingIcon className={classes.shoppingIcon} />
			<span className={classes.itemCount}>{cartItemsCount}</span>
		</div>
	);
}

const mapStateToProps = ({ cart: { cartItems } }) => {
	return {
		// 0 as initial accumulator value
		cartItemsCount: cartItems.reduce(
			(accumulatedQuantity, cartItem) =>
				accumulatedQuantity + cartItem.quantity,
			0
		),
	};
};

export default connect(mapStateToProps)(CartIcon);
