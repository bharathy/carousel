import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Root from './components/root';
import carouselReducer from './reducers/carousel';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export const init = () => {
	const initialState = {
		images: []
	};
	const store = createStoreWithMiddleware(carouselReducer, initialState);

	ReactDOM.render(
		<Root store={ store } />,
		document.getElementById('app')
	);
}

module.hot.accept();
