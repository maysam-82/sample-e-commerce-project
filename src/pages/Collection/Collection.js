import React from 'react';
import { connect } from 'react-redux';
import { selectShoppingCollection } from '../../reducers/shop/shopSelector';
import CategoryItem from '../../containers/CategoryItem/CategoryItem';

import classes from './collection.module.scss';

function Category({ collection }) {
	const { title, items } = collection;
	function renderCollectionItems() {
		return items.map((item) => <CategoryItem key={item.id} item={item} />);
	}
	return (
		<div className={classes.collection}>
			<h2 className={classes.title}>{title}</h2>
			<div className={classes.items}>{renderCollectionItems()}</div>
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
