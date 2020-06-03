import React from 'react';
import Homepage from '../../pages/Homepage/Homepage';
import menuItems from '../../data/menuItems';

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
				<Homepage menuItems={menuItems} />
			</div>
		);
	}
}

export default App;
