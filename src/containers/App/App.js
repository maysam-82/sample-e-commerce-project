import React from 'react';
import Home from '../../pages/Home';
import menuItems from '../../data/menuItems';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			menuItems,
		};
	}

	render() {
		const { menuItems } = this.state;
		return (
			<div>
				<Switch>
					<Route exact path="/" render={() => <Home menuItems={menuItems} />} />
				</Switch>
			</div>
		);
	}
}

export default App;
