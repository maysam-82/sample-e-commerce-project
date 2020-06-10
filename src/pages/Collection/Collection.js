import React from 'react';
import { connect } from 'react-redux';
import { selectShoppingCollection } from '../../reducers/shop/shopSelector';

import classes from './collection.module.scss';

function Category({ collection }) {
	return (
		<div className={classes.collection}>
			<h2>CATEGORY PAGE</h2>
		</div>
	);
}

const mapStateToProps = (state, ownProps) => ({
	// Curring means a function that returns another function
	collection: selectShoppingCollection(ownProps.match.params.collectionId)(
		state
	),
});

export default connect(mapStateToProps)(Category);
