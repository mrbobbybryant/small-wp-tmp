/**
 * External dependencies
 */

import React, { PropTypes } from 'react';
import times from 'lodash/utility/times';

/**
 * Internal dependencies
 */

import Post from 'components/ui/post';
import PostPlaceholder from 'components/ui/post-placeholder';

/**
 * Constants
 */

const NUMBER_OF_PLACEHOLDERS = 4;

function PostsList( { hasPosts, posts } ) {
	let children;
	if ( hasPosts ) {
		children = posts.map( ( post ) => {
			return (
				<li key={ post.id } className="posts-list__item">
					<Post post={ post } excerpt />
				</li>
			);
		} );
	} else {
		children = times( NUMBER_OF_PLACEHOLDERS, ( i ) => <PostPlaceholder key={ i } /> );
	}

	return (
		<ul className="posts-list">
			{ children }
		</ul>
	);
}

PostsList.propTypes = {
	hasPosts: PropTypes.bool,
	posts: PropTypes.array
};

export default PostsList;
