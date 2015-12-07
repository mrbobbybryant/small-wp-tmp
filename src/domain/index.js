/**
 * External dependencies
 */

import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

/**
 * Internal dependencies
 */

import reducers from './reducers';

/**
 * Store initialization
 */

export function createReduxStore() {
	return applyMiddleware(
		thunkMiddleware
	)( createStore )( reducers );
}
