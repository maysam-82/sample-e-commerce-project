import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CustomButton from '../../components/CustomButton/CustomButton';
import CartItem from '../../components/CartItem/CartItem';
import { selectCartItems } from '../../reducers/cart/cartSelectors';
import { displayCartDropdown } from '../../actions/actionCreators';
import classes from './cartDropdown.module.scss';

function CartDropdown({ cartItems, history, displayCartDropdown }) {
	function renderCartItems() {
		return cartItems.map((cartItem) => (
			<CartItem key={cartItem.id} item={cartItem} />
		));
	}
	return (
		<div className={classes.cartDropdown}>
			<div className={classes.cartItems}>
				{cartItems.length ? (
					renderCartItems()
				) : (
					<span className={classes.emptyMessage}>Your cart is empty.</span>
				)}
			</div>
			<CustomButton
				onClick={() => {
					history.push('/checkout');
					displayCartDropdown();
				}}
			>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default withRouter(
	connect(mapStateToProps, { displayCartDropdown })(CartDropdown)
);
