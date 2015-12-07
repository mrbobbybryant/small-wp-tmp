/**
 * External dependencies
 */

import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */

import { FETCH_SITE, RECEIVE_SITE } from './action-types';

function isFetching( state = false, action ) {
	switch ( action.type ) {
		case FETCH_SITE:
			state = true;
			break;
		case RECEIVE_SITE:
			state = false;
			break;
	}

	return state;
}

function details( state = null, action ) {
	switch ( action.type ) {
		case RECEIVE_SITE:
			state = action.payload.site;
			break;
	}

	return state;
}

export default combineReducers( {
	isFetching,
	details
} );
