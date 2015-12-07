/**
 * External dependencies
 */

import { combineReducers } from 'redux';
import get from 'lodash/object/get';
import indexBy from 'lodash/collection/indexBy';

/**
 * Internal dependencies
 */

import { RECEIVE_POSTS } from 'domain/posts/action-types';

function byId( state = {}, action ) {
	switch ( action.type ) {
		case RECEIVE_POSTS:
			state = Object.assign( {}, state, action.payload.posts.reduce( ( terms, post ) => {
				const embeddedTerms = get( object, '_embedded.https://api.w.org/term', [] );
				return Object.assign( terms, indexBy( embeddedTerms, 'id' ) );
			}, {} ) );
			break;
	}

	return state;
}
