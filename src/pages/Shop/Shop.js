import React, { useEffect, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShoppingIsLoadingData } from '../../reducers/shop/shopSelector';
import { fetchCollections } from '../../actions/actionCreators';
import Collection from '../Collection';
import CollectionOverview from '../../containers/CollectionOverview';
import Spinner from '../../components/Spinner';

// we have access to match object because in App component the Shop page is nested inside Route.
function Shop({ match, fetchCollections, isLoading }) {
	useEffect(() => {
		fetchCollections();
	}, [fetchCollections]);
	return (
		<Fragment>
			<Spinner text="Fetching Collections" isLoading={isLoading} />
			<Route exact path={`${match.path}`} component={CollectionOverview} />
			{/* Adding nested routes */}
			<Route path={`${match.path}/:collectionId`} component={Collection} />
		</Fragment>
	);
}

const mapStateToProps = createStructuredSelector({
	isLoading: selectShoppingIsLoadingData,
});

export default connect(mapStateToProps, { fetchCollections })(Shop);
