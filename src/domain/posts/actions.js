/**
 * Internal dependencies
 */

import fetchNextPostsPageFromApi from 'api/posts/fetch';
import {
	SET_POST_QUERY,
	FETCH_NEXT_PAGE,
	RECEIVE_POSTS,
	FETCH_POSTS_ERROR
} from './action-types';

export function setPostQuery( query ) {
	return {
		type: SET_POST_QUERY,
		payload: { query }
	};
}

export function fetchNextPostsPage() {
	return async function( dispatch, getState ) {
		const query = getState().posts.currentQuery;

		dispatch( {
			type: FETCH_NEXT_PAGE,
			payload: { query }
		} );

		try {
			const payload = await fetchNextPostsPageFromApi( query );
			dispatch( {
				type: RECEIVE_POSTS,
				payload: Object.assign( { query }, payload )
			} );
		} catch ( error ) {
			dispatch( {
				type: FETCH_POSTS_ERROR,
				error
			} );
		}
	};
}
