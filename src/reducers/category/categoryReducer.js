import categoryItems from '../../data/menuItems.data';

const INITIAL_STATE = {
	categoryItems,
};

function categoryReducer(state = INITIAL_STATE, action) {
	const { type } = action;
	switch (type) {
		default:
			return state;
	}
}

export default categoryReducer;
