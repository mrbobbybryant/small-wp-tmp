/**
 * External dependencies
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Logo( { url, image } ) {
	return (
		<Link to={ url || '/' } className="logo">
			<img src={ image } className="logo__image" />
		</Link>
	);
}

Logo.propTypes = {
	url: PropTypes.string,
	image: PropTypes.string
}

export default Logo;
