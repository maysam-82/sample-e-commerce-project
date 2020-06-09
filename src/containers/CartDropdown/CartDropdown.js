import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../../components/CustomButton/CustomButton';
import CartItem from '../../components/CartItem/CartItem';
import { selectCartItems } from '../../reducers/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';
import classes from './cartDropdown.module.scss';

function CartDropdown({ cartItems }) {
	function renderCartItems() {
		return cartItems.map((cartItem) => (
			<CartItem key={cartItem.id} item={cartItem} />
		));
	}
	return (
		<div className={classes.cartDropdown}>
			<div className={classes.cartItems}>{renderCartItems()}</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
