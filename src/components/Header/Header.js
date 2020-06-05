import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo/original.svg';
import { auth } from '../../firebase/firebase';
import classes from './header.module.scss';

export default function Header({ currentUserData }) {
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
				{currentUserData ? (
					<div className={classes.option} onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className={classes.option} to="/signin">
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	);
}
