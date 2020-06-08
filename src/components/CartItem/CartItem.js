import React from 'react';
import classes from './cartItem.module.scss';

function CartItem({ item: { imageUrl, price, name, quantity } }) {
	return (
		<div className={classes.cartItem}>
			<img src={imageUrl} alt={name} />
			<div className={classes.itemDetails}>
				<span className={classes.name}>{name}</span>
				<span className={classes.price}>
					{quantity} X ${price}
				</span>
			</div>
		</div>
	);
}

export default CartItem;
