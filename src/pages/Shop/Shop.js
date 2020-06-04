import React from 'react';
import ShoppingCategory from '../../components/ShoppingCategory';

export default function Shop({ shopData }) {
	function renderCategories() {
		return shopData.map(({ id, ...caterogyProps }) => (
			<ShoppingCategory key={id} {...caterogyProps} />
		));
	}
	return <div>{renderCategories()}</div>;
}
