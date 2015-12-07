/**
 * External dependencies
 */

import React from 'react';

/**
 * Internal dependencies
 */

import Post from 'components/ui/post';

/**
 * Constants
 */

const PLACEHOLDER_POST = {
	link: '/',
	title: '',
	content: ''
};

export default function PostPlaceholder() {
	return (
		<Post post={ PLACEHOLDER_POST } className="post-placeholder" />
	);
}
