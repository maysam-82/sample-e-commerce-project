import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShoppingIsLoadingData } from '../../reducers/shop/shopSelector';
import { fetchCollections } from '../../actions/actionCreators';
import Collection from '../Collection';
import CollectionOverview from '../../containers/CollectionOverview';
import Spinner from '../../components/Spinner';

import classes from './shop.module.scss';

// we have access to match object because in App component the Shop page is nested inside Route.
function Shop({ match, fetchCollections, isLoading }) {
	useEffect(() => {
		fetchCollections();
	}, [fetchCollections]);
	return (
		<div className={classes.shopPage}>
			<Spinner text="Fetching Collections" isLoading={isLoading} />
			<Route exact path={`${match.path}`} component={CollectionOverview} />
			{/* Adding nested routes */}
			<Route path={`${match.path}/:collectionId`} component={Collection} />
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	isLoading: selectShoppingIsLoadingData,
});

export default connect(mapStateToProps, { fetchCollections })(Shop);
