import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/app';
import carouselReducer from './reducers/carousel';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export const init = () => {
	const initialState = {
		images: [],
		currentImage: null
	};
	const store = createStoreWithMiddleware(carouselReducer, initialState);

	ReactDOM.render(
		<Provider store={ store }>
        	<App />
    	</Provider>,
		document.getElementById('app')
	);
}

init();

module.hot.accept();
