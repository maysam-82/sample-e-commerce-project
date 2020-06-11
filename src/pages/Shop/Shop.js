import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOverview from '../../containers/CollectionOverview/CollectionOverview';
import Collection from '../Collection';
import {
	firestore,
	convertCollectionsInSnapshotToObject,
} from '../../firebase/firebase';
import { updateCollections } from '../../actions/actionCreators';

import classes from './shop.module.scss';

// we have access to match object because in App component the Shop page is nested inside Route.
function Shop({ match, updateCollections }) {
	useEffect(() => {
		const collectionRef = firestore.collection('collections');
		collectionRef.onSnapshot(async (snapshot) => {
			const collections = convertCollectionsInSnapshotToObject(snapshot);
			updateCollections(collections);
		});
		return () => {};
	});
	return (
		<div className={classes.shopPage}>
			<Route exact path={`${match.path}`} component={CollectionOverview} />
			{/* Adding nested routes */}
			<Route path={`${match.path}/:collectionId`} component={Collection} />
		</div>
	);
}

export default connect(null, { updateCollections })(Shop);
