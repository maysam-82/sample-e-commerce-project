import React from 'react';
import MenuItem from '../MenuItem/';
import classes from './menuItems.module.scss';

const MenuItems = ({ menuItems }) => {
	function renderMenuItem() {
		return menuItems.map(({ title, id, imageUrl, size }) => (
			<MenuItem title={title} key={id} imageUrl={imageUrl} imageSize={size} />
		));
	}
	return <div className={classes.directoryMenu}>{renderMenuItem()}</div>;
};

export default MenuItems;
