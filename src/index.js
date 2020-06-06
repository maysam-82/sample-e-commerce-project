import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';
import reducers from './reducers';
import './index.css';
const middlewares = [thunk];
const store = createStore(reducers, applyMiddleware(...middlewares));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
);
