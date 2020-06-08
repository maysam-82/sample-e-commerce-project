import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import classes from './categoryItem.module.scss';

export default function CategoryItem({ id, price, imageUrl, name }) {
	return (
		<div className={classes.categoryItem}>
			<div className={classes.image}>
				<img src={imageUrl} alt={name} />
			</div>
			<div className={classes.categoryItemFooter}>
				<span className={classes.name}>{name}</span>
				<span className={classes.price}>{price}</span>
			</div>
			<CustomButton colorInverted>ADD TO CART</CustomButton>
		</div>
	);
}
