import React from 'react';
import classes from './menuItem.module.scss';

const MenuItem = ({ title, imageUrl, imageSize }) => {
	return (
		<div className={classes.menuItem}>
			<img
				src={imageUrl}
				className={
					imageSize !== 'large'
						? classes.menuItemImage
						: classes.menuItemImageLarge
				}
				alt={title}
			/>
			<div className={classes.content}>
				<h1 className={classes.title}>{title}</h1>
				<span className={classes.subtitle}>SHOP NOW</span>
			</div>
		</div>
	);
};

export default MenuItem;
