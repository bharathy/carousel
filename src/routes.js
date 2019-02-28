import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './components/app';

export default () => {
	return (
	<BrowserRouter>
		<div>
			<header className="header">
				<h1>Carousel Test</h1>
			</header>
			<Switch>
				<Route exact path='/' component={App}/>
			</Switch>
		</div>
	</BrowserRouter>
	)
};
