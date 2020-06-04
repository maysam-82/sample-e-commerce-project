import React from 'react';
import Homepage from '../../pages/Homepage/Homepage';
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
					<Route
						exact
						path="/"
						render={() => <Homepage menuItems={menuItems} />}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
