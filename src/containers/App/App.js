import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import menuItems from '../../data/menuItems.data';
import shopData from '../../data/shop.data';
import Shop from '../../pages/Shop/Shop';
import Header from '../../components/Header/Header';
import SignInSignUp from '../../pages/SignInSignUp';
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
				<Header />
				<Switch>
					<Route exact path="/" render={() => <Home menuItems={menuItems} />} />
					<Route path="/shop" render={() => <Shop shopData={shopData} />} />
					<Route path="/signin" component={SignInSignUp} />
				</Switch>
			</div>
		);
	}
}

export default App;
