import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	selectCartItems,
	selectCartTotalCost,
} from '../../reducers/cart/cartSelectors';
import classes from './checkout.module.scss';

function Checkout({ cartItems, totalCost }) {
	function renderCartItems() {
		return cartItems.map((cartItem) => cartItem.name);
	}
	return (
		<div className={classes.checkoutPage}>
			<div className={classes.checkoutHeader}>
				<div className={classes.headerBlock}>
					<span>PRODUCT</span>
				</div>
				<div className={classes.headerBlock}>
					<span>DESCRIPTION</span>
				</div>
				<div className={classes.headerBlock}>
					<span>QUANTITY</span>
				</div>
				<div className={classes.headerBlock}>
					<span>PRICE</span>
				</div>
				<div className={classes.headerBlock}>
					<span>REMOVE</span>
				</div>
			</div>
			<div>{renderCartItems()}</div>
			<span className={classes.total}>TOTAL: {totalCost}</span>
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	totalCost: selectCartTotalCost,
});

export default connect(mapStateToProps)(Checkout);
