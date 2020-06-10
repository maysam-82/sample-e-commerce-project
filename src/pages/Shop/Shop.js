import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShoppingData } from '../../reducers/shop/shopSelector';
import ShoppingCategory from '../../components/ShoppingCategory';

function Shop({ shopData }) {
	function renderCategories() {
		return shopData.map(({ id, ...caterogyProps }) => (
			<ShoppingCategory key={id} {...caterogyProps} />
		));
	}
	return <div>{renderCategories()}</div>;
}

const mapStateToProps = createStructuredSelector({
	shopData: selectShoppingData,
});

export default connect(mapStateToProps)(Shop);
