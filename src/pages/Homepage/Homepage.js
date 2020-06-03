import React from 'react';
import classes from './homepage.module.scss';
import MenuItems from '../../components/MenuItems/MenuItems';

const Homepage = ({ menuItems }) => {
	return (
		<div className={classes.homepage}>
			<MenuItems menuItems={menuItems} />
		</div>
	);
};

export default Homepage;
