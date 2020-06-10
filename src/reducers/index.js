import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// import localStorage
import storage from 'redux-persist/lib/storage';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';

const persistConfig = {
	key: 'root',
	storage,
	// whitelist is an array that contains list of name (key)of all reducers which we are going to store
	whitelist: ['cart'],
};

const reducers = combineReducers({
	users: userReducer,
	cart: cartReducer,
});

export default persistReducer(persistConfig, reducers);
