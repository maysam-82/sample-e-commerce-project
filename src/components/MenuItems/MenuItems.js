import React from 'react';
import MenuItem from '../MenuItem/';
import classes from './menuItems.module.scss';

const MenuItems = ({ menuItems }) => {
	function renderMenuItem() {
		return menuItems.map(({ id, ...menuItemProps }) => (
			<MenuItem key={id} {...menuItemProps} />
		));
	}
	return <div className={classes.directoryMenu}>{renderMenuItem()}</div>;
};

export default MenuItems;
