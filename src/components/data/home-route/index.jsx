/**
 * External dependencies
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Internal dependencies
 */

import { fetchNextPostsPage, setPostQuery } from 'domain/posts/actions';
import { getPosts, hasPosts } from 'domain/posts/selectors';
import PostsList from 'components/ui/posts-list';

class HomeRoute extends Component {
	static propTypes = {
		hasPosts: PropTypes.bool,
		posts: PropTypes.array
	}

	static defaultProps = {
		hasPosts: false
	}

	constructor( props ) {
		super( props );

		if ( ! props.hasPosts ) {
			props.setPostQuery( '' );
			props.fetchNextPostsPage();
		}
	}

	render() {
		const { hasPosts, posts } = this.props;

		return (
			<PostsList
				hasPosts={ hasPosts }
				posts={ posts } />
		);
	}
}

export default connect( ( state ) => {
	return {
		hasPosts: hasPosts( state ),
		posts: getPosts( state )
	};
}, ( dispatch ) => {
	return bindActionCreators( {
		fetchNextPostsPage,
		setPostQuery
	}, dispatch );
} )( HomeRoute );
