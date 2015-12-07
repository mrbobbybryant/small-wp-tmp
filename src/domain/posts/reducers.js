/**
 * External dependencies
 */

import { combineReducers } from 'redux';
import indexBy from 'lodash/collection/indexBy';

/**
 * Internal dependencies
 */

import { SET_POST_QUERY, FETCH_NEXT_PAGE, RECEIVE_POSTS } from './action-types';
import normalizePost from './schema';

function byId( state = {}, action ) {
	switch ( action.type ) {
		case RECEIVE_POSTS:
			const posts = action.payload.posts.map( normalizePost );
			state = Object.assign( {}, state, indexBy( posts, 'id' ) );
			break;
	}

	return state;
}

function queries( state = {}, action ) {
	switch ( action.type ) {
		case SET_POST_QUERY:
			state[ action.payload.query ] = {};
			break;
		case RECEIVE_POSTS:
			const { posts, query } = action.payload;
			if ( ! state.hasOwnProperty( query ) ) {
				break;
			}

			state[ query ].posts = posts.map( ( post ) => {
				return post.id;
			} );
			break;
	}

	return state;
}

function currentQuery( state = '', action ) {
	switch ( action.type ) {
		case SET_POST_QUERY:
			state = action.payload.query;
			break;
	}

	return state;
}

export default combineReducers( {
	byId,
	queries,
	currentQuery
} );
