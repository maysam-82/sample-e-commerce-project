import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShoppingCollectionPreview } from '../../reducers/shop/shopSelector';
import ShoppingCategory from '../../components/ShoppingCategory/ShoppingCategory';
import withSpinner from '../../hoc/withSpinner/withSpinner';

import classes from './collectionOverview.module.scss';

function CollectionOverview({ collections }) {
	function renderCollections() {
		return collections.map(({ id, ...collectionProps }) => (
			<ShoppingCategory key={id} {...collectionProps} />
		));
	}

	return (
		<div className={classes.collectionOverview}>{renderCollections()}</div>
	);
}

const mapStateToProps = createStructuredSelector({
	collections: selectShoppingCollectionPreview,
});

export default withSpinner(connect(mapStateToProps)(CollectionOverview));
