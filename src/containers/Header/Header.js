import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/logo/original.svg';
import { auth } from '../../firebase/firebase';
import classes from './header.module.scss';
import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';

function Header({ currentUserId }) {
	const [isCartDropdownShown, setIsCartDropdownShown] = useState(false);
	function handleClick() {
		setIsCartDropdownShown(!isCartDropdownShown);
	}
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
				<div className={classes.option} onClick={handleClick}>
					<CartIcon />
				</div>
			</div>
			<CartDropdown isShown={isCartDropdownShown} />
		</div>
	);
}
const mapStateToProps = (state) => {
	return {
		currentUserId: state.users.currentUserId,
	};
};
export default connect(mapStateToProps)(Header);
