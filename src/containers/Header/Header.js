import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/logo/original.svg';
import { auth } from '../../firebase/firebase';
import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';
import { displayCartDropdown } from '../../actions/actionCreators';
import classes from './header.module.scss';

function Header({ currentUserId, isCartDropdownHidden, displayCartDropdown }) {
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
				{currentUserId ? (
					<div className={classes.option} onClick={() => auth.signOut()}>
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
const mapStateToProps = (state) => {
	return {
		currentUserId: state.users.currentUserId,
		isCartDropdownHidden: state.cart.isCartDropdownHidden,
	};
};
export default connect(mapStateToProps, { displayCartDropdown })(Header);
