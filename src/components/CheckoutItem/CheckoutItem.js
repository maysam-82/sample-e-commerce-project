import React from 'react';

import classes from './checkoutItem.module.scss';

function CheckoutItem({ cartItem: { imageUrl, name, quantity, price } }) {
	return (
		<div className={classes.checkoutItem}>
			<div className={classes.imageContainer}>
				<img src={imageUrl} alt={name} />
			</div>
			<span className={classes.name}>{name}</span>
			<span className={classes.quantity}>{quantity}</span>
			<span className={classes.price}>{price}</span>
			<span className={classes.removeButton}>&#10005;</span>
		</div>
	);
}

export default CheckoutItem;
