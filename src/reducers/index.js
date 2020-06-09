import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';

export default combineReducers({
	users: userReducer,
	cart: cartReducer,
});
