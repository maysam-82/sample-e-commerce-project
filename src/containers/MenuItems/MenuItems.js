import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MenuItem from '../../components/MenuItem';
import { selectCategoryItems } from '../../reducers/category/categorySelector';
import classes from './menuItems.module.scss';

const MenuItems = ({ categoryItems }) => {
	function renderMenuItem() {
		return categoryItems.map(({ id, ...categoryItem }) => (
			<MenuItem key={id} {...categoryItem} />
		));
	}
	return <div className={classes.directoryMenu}>{renderMenuItem()}</div>;
};

const mapStateToProps = createStructuredSelector({
	categoryItems: selectCategoryItems,
});

export default connect(mapStateToProps)(MenuItems);
