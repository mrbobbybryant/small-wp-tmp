/**
 * External dependencies
 */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Internal dependencies
 */

import BaseRoute from 'components/data/base-route';
import HomeRoute from 'components/data/home-route';
import NotFoundRoute from 'components/data/not-found-route';

export default [
	<Route path="/" component={ BaseRoute }>
		<IndexRoute component={ HomeRoute } />
		<Route path="*" component={ NotFoundRoute } />
	</Route>
];
