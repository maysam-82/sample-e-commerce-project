import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../containers/CollectionOverview/CollectionOverview';
import Collection from '../Collection';

import classes from './shop.module.scss';

// we have access to match object because in App component the Shop page is nested inside Route.
function Shop({ match }) {
	return (
		<div className={classes.shopPage}>
			<Route exact path={`${match.path}`} component={CollectionOverview} />
			{/* Adding nested routes */}
			<Route path={`${match.path}/:collectionId`} component={Collection} />
		</div>
	);
}

export default Shop;
