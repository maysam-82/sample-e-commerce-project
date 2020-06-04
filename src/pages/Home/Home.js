import React from 'react';
import classes from './home.module.scss';
import MenuItems from '../../components/MenuItems/MenuItems';

const Home = ({ menuItems }) => {
	return (
		<div className={classes.home}>
			<MenuItems menuItems={menuItems} />
		</div>
	);
};

export default Home;
