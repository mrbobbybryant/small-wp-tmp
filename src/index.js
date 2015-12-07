/**
 * External dependencies
 */

import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router } from 'react-router';

/**
 * Internal dependencies
 */

import { createReduxStore } from 'domain';
import routes from 'routes';
import Root from 'components/data/root';

/**
 * Stylesheets
 */

import 'assets/stylesheets/main.scss';

/**
 * Render
 */

ReactDOM.render(
	<Root store={ createReduxStore() }>
		<Router history={ createBrowserHistory() } routes={ routes } />
	</Root>,
	document.getElementById( 'app' )
);
