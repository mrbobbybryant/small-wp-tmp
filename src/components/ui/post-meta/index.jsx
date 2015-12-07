/**
 * External dependencies
 */

import React, { Component, PropTypes } from 'react';
import mapValues from 'lodash/object/mapValues';

/**
 * Internal dependencies
 */

import PostDate from 'components/ui/post-date';
import PostCategories from 'components/ui/post-categories';
import PostTags from 'components/ui/post-tags';

function PostMeta( )

export default class PostMeta extends Component {
	static propTypes = {
		post: PropTypes.object
	}

	render() {
		const { post } = this.props;

		return (
			<div className="post-meta">
				<PostDate post={ post } />
				{ /* <PostCategories post={ post } /> */ }
				{ /* <PostTags post={ post } /> */ }
			</div>
		);
	}
}
