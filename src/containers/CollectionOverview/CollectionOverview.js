import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShoppingData } from '../../reducers/shop/shopSelector';
import ShoppingCategory from '../../components/ShoppingCategory/ShoppingCategory';

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
	collections: selectShoppingData,
});

export default connect(mapStateToProps)(CollectionOverview);
