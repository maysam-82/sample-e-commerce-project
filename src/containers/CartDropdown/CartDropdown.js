import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../../components/CustomButton/CustomButton';
import CartItem from '../../components/CartItem/CartItem';
import classes from './cartDropdown.module.scss';

function CartDropdown({ isShown, cartItems }) {
	function renderCartItems() {
		return cartItems.map((cartItem) => (
			<CartItem key={cartItem.id} item={cartItem} />
		));
	}
	return isShown ? (
		<div className={classes.cartDropdown}>
			<div className={classes.cartItems}>{renderCartItems()}</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	) : null;
}

const mapStateToProps = ({ cart: { cartItems } }) => {
	return {
		cartItems,
	};
};

export default connect(mapStateToProps)(CartDropdown);
