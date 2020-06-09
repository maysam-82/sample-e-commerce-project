import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/icons/shopping_bag.svg';
import { selectCartItemsCount } from '../../reducers/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';
import classes from './cartIcon.module.scss';

function CartIcon({ cartItemsCount }) {
	return (
		<div className={classes.cartIcon}>
			<ShoppingIcon className={classes.shoppingIcon} />
			<span className={classes.itemCount}>{cartItemsCount}</span>
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	cartItemsCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
