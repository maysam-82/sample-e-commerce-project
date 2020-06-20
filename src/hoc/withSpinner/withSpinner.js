import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectShoppingIsLoadingData } from '../../reducers/shop/shopSelector';
import Spinner from '../../components/Spinner';

const withSpinner = (WrappedComponent) => ({
	isCollectionFetching,
	...otherProps
}) => {
	return isCollectionFetching ? (
		<Spinner />
	) : (
		<WrappedComponent {...otherProps} />
	);
};

const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectShoppingIsLoadingData,
});

export default compose(connect(mapStateToProps, null), withSpinner);
