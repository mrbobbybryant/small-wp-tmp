/**
 * External dependencies
 */

import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */

import posts from './posts/reducers';
import site from './site/reducers';
import terms from './terms/reducers';

export default combineReducers( {
	posts,
	site,
	terms
} );
