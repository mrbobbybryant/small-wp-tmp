/**
 * External dependencies
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Highlight from 'react-highlight';
import moment from 'moment';
import classNames from 'classnames';

/**
 * Internal dependencies
 */

import DateLabel from 'components/ui/date-label';
import PostTags from 'components/data/post-tags';
import Button from 'components/ui/button';

function Post( { post, excerpt, className } ) {
	const classes = classNames( 'post', className );

	return (
		<article className={ classes }>
			<header className="post__header">
				<Link to={ post.link } className="post__title-link">
					<h1 className="post__title">
						{ post.title }
					</h1>
				</Link>
				<div className="post__meta">
					<DateLabel
						date={ post.date }
						className="post__meta-block" />
					<PostTags
						postId={ post.id }
						className="post__meta-block" />
				</div>
			</header>
			<Highlight innerHTML className="post__content">
				{ excerpt ? post.excerpt : post.content }
			</Highlight>
			{ excerpt && (
				<footer className="post__read-more">
					<Button to={ post.link }>Continue Reading</Button>
				</footer>
			) }
		</article>
	);
}

Post.propTypes = {
	post: PropTypes.object,
	excerpt: PropTypes.bool,
	className: PropTypes.string
}

export default Post;
