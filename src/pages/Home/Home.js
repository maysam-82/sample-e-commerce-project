import React from 'react';
import classes from './home.module.scss';
import MenuItems from '../../containers/MenuItems/MenuItems';

const Home = () => {
	return (
		<div className={classes.home}>
			<MenuItems />
		</div>
	);
};

export default Home;
