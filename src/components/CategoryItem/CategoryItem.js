import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';
import { addToCart } from '../../actions/actionCreators';
import classes from './categoryItem.module.scss';

function CategoryItem({ item, addToCart }) {
	const { price, imageUrl, name } = item;
	return (
		<div className={classes.categoryItem}>
			<div className={classes.image}>
				<img src={imageUrl} alt={name} />
			</div>
			<div className={classes.categoryItemFooter}>
				<span className={classes.name}>{name}</span>
				<span className={classes.price}>{price}</span>
			</div>
			<CustomButton colorInverted onClick={() => addToCart(item)}>
				ADD TO CART
			</CustomButton>
		</div>
	);
}

export default connect(null, { addToCart })(CategoryItem);
