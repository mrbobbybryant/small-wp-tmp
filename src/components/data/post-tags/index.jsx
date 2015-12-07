/**
 * External dependencies
 */

import { connect } from 'react-redux';

/**
 * Internal dependencies
 */

import TagsList from 'components/ui/tags-list';
import { getPostTags } from 'domain/posts/selectors';

export default connect( ( state, ownProps ) => {
	return {
		tags: getPostTags( state, ownProps.postId )
	};
} )( TagsList );
