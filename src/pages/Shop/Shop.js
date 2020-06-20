import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOverview from '../../containers/CollectionOverview';
import Collection from '../Collection';
import { fetchCollections } from '../../actions/actionCreators';

import classes from './shop.module.scss';

// we have access to match object because in App component the Shop page is nested inside Route.
function Shop({ match, fetchCollections }) {
	useEffect(() => {
		fetchCollections();
	});
	return (
		<div className={classes.shopPage}>
			<Route exact path={`${match.path}`} component={CollectionOverview} />
			{/* Adding nested routes */}
			<Route path={`${match.path}/:collectionId`} component={Collection} />
		</div>
	);
}

export default connect(null, { fetchCollections })(Shop);
