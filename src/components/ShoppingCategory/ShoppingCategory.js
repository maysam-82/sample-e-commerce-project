import React from 'react';
import classes from './shoppingCategory.module.scss';
import CategoryItem from '../CategoryItem/CategoryItem';

export default function ShoppingCategory({ title, routeName, items }) {
	function getTopFourItems(items) {
		return items.filter((item, index) => index < 4);
	}
	function renderCategory() {
		const topFourItems = getTopFourItems(items);
		return topFourItems.map((item) => (
			<CategoryItem key={item.id} item={item} />
		));
	}
	return (
		<div className={classes.categoryContainer}>
			<div className={classes.title}>{title}</div>
			<div className={classes.preview}>{renderCategory()}</div>
		</div>
	);
}
