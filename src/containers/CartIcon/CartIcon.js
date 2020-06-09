import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/icons/shopping_bag.svg';
import { selectCartItemsCount } from '../../reducers/cart/cartSelectors';
import classes from './cartIcon.module.scss';

function CartIcon({ cartItemsCount }) {
	return (
		<div className={classes.cartIcon}>
			<ShoppingIcon className={classes.shoppingIcon} />
			<span className={classes.itemCount}>{cartItemsCount}</span>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		cartItemsCount: selectCartItemsCount(state),
	};
};

export default connect(mapStateToProps)(CartIcon);
