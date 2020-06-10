import shoppingData from '../../data/shop.data';
const INITIAL_STATE = {
	shoppingData,
};

function shopReducer(state = INITIAL_STATE, action) {
	const { type } = action;
	switch (type) {
		default:
			return state;
	}
}

export default shopReducer;
