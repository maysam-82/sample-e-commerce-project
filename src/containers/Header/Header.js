import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/logo/original.svg';
import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';
import { displayCartDropdown, userSignout } from '../../actions/actionCreators';
import { selectCartHidden } from '../../reducers/cart/cartSelectors';
import { selectCurrentUserData } from '../../reducers/user/userSelectors';
import classes from './header.module.scss';

function Header({
	user,
	isCartDropdownHidden,
	displayCartDropdown,
	userSignout,
}) {
	return (
		<div className={classes.header}>
			<Link to="/" className={classes.logoContainer}>
				<Logo className={classes.logo} />
			</Link>
			<div className={classes.options}>
				<Link to="/shop" className={classes.option}>
					SHOP
				</Link>
				<Link to="/contact" className={classes.option}>
					CONTACT
				</Link>
				{user ? (
					<div className={classes.option} onClick={() => userSignout()}>
						SIGN OUT
					</div>
				) : (
					<Link className={classes.option} to="/signin">
						SIGN IN
					</Link>
				)}
				<div className={classes.option} onClick={displayCartDropdown}>
					<CartIcon />
				</div>
			</div>
			{isCartDropdownHidden ? <CartDropdown /> : null}
		</div>
	);
}
const mapStateToProps = createStructuredSelector({
	user: selectCurrentUserData,
	isCartDropdownHidden: selectCartHidden,
});
export default connect(mapStateToProps, { displayCartDropdown, userSignout })(
	Header
);
