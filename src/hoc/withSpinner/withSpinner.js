import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectShoppingIsLoadingData } from '../../reducers/shop/shopSelector';
import { selectIsFetchingUser } from '../../reducers/user/userSelectors';
import Spinner from '../../components/Spinner';

const withSpinner = (WrappedComponent) => ({
	isCollectionFetching,
	isUserAuthFetching,
	...otherProps
}) => {
	return isCollectionFetching || isUserAuthFetching ? (
		<Spinner />
	) : (
		<WrappedComponent {...otherProps} />
	);
};

const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectShoppingIsLoadingData,
	isUserAuthFetching: selectIsFetchingUser,
});

export default compose(connect(mapStateToProps, null), withSpinner);
