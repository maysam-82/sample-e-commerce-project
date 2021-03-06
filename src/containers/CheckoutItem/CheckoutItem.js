import React from 'react';
import { connect } from 'react-redux';
import {
	removeFromCart,
	decreaseFromCart,
	addToCart,
} from '../../actions/actionCreators';
import classes from './checkoutItem.module.scss';

function CheckoutItem({
	cartItem,
	removeFromCart,
	decreaseFromCart,
	addToCart,
}) {
	const { imageUrl, name, quantity, price, id } = cartItem;
	return (
		<div className={classes.checkoutItem}>
			<div className={classes.imageContainer}>
				<img src={imageUrl} alt={name} />
			</div>
			<span className={classes.name}>{name}</span>
			<span className={classes.quantity}>
				<span
					className={classes.arrow}
					onClick={() => decreaseFromCart(cartItem)}
				>
					&#10094;
				</span>
				<span className={classes.value}>{quantity}</span>
				<span className={classes.arrow} onClick={() => addToCart(cartItem)}>
					&#10095;
				</span>
			</span>
			<span className={classes.price}>{price}</span>
			<span className={classes.removeButton} onClick={() => removeFromCart(id)}>
				&#10005;
			</span>
		</div>
	);
}

export default connect(null, { removeFromCart, decreaseFromCart, addToCart })(
	CheckoutItem
);
