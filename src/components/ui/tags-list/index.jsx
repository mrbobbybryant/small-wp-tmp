/**
 * External dependencies
 */

import React, { PropTypes } from 'react';
import classnames from 'classnames';

/**
 * Internal dependencies
 */

import TermList from 'components/ui/terms-list';

function TagsList( { tags, className } ) {
	const classes = classnames( 'tags-list', className );

	return (
		<TermList
			taxonomy="tag"
			terms={ tags }
			icon="tags"
			className={ classes } />
	);
}

TagsList.propTypes = {
	tags: PropTypes.array,
	className: PropTypes.string
};

export default TagsList;
