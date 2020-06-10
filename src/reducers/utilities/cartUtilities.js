export function addQuantityBeforeAddItem(cartItems, newCartItem) {
	const hasSameItem = cartItems.find(
		(cartItem) => cartItem.id === newCartItem.id
	);
	if (hasSameItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === newCartItem.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	// `quantity` value will be attached for the first time.
	return [...cartItems, { ...newCartItem, quantity: 1 }];
}

export function removeItemFromCarts(cartItems, cartItemId) {
	return cartItems.filter((cartItem) => cartItem.id !== cartItemId);
}
