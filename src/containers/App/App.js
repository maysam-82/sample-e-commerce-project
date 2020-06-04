import React from 'react';
import Home from '../../pages/Home';
import menuItems from '../../data/menuItems.data';
import shopData from '../../data/shop.data';
import { Route, Switch } from 'react-router-dom';
import Shop from '../../pages/Shop/Shop';
import classes from './app.module.scss';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			menuItems,
			shopData,
		};
	}

	render() {
		const { menuItems, shopData } = this.state;
		return (
			<div className={classes.appContainer}>
				<Switch>
					<Route exact path="/" render={() => <Home menuItems={menuItems} />} />
					<Route
						exact
						path="/shop"
						render={() => <Shop shopData={shopData} />}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
