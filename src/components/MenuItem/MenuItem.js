import React from 'react';
import classes from './menuItem.module.scss';

const MenuItem = ({ title, imageUrl, imageSize }) => {
	let menuItemClass = [classes.menuItem];
	if (imageSize === 'large') {
		menuItemClass.push(classes.menuItemLarge);
	}
	return (
		<div className={menuItemClass.join(' ')}>
			<img src={imageUrl} className={classes.menuItemImage} alt={title} />
			<div className={classes.content}>
				<h1 className={classes.title}>{title}</h1>
				<span className={classes.subtitle}>SHOP NOW</span>
			</div>
		</div>
	);
};

export default MenuItem;
