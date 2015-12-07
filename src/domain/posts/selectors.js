export function hasPosts( state, query = '' ) {
	const { queries } = state.posts;
	return !! ( queries[ query ] && queries[ query ].posts );
}

export function getPosts( state, query = '' ) {
	if ( ! hasPosts( state, query ) ) {
		return [];
	}

	const { posts } = state;
	return posts.queries[ query ].posts.map( ( id ) => {
		return posts.byId[ id ];
	} );
}

export function getPostTerms( state, postId, taxonomy = 'category' ) {
	const post = state.posts.byId[ postId ];
	if ( ! post ) {
		return [];
	}

	return post.terms[ taxonomy ].map( ( termId ) => {
		return state.terms.byId[ termId ];
	} );
}
