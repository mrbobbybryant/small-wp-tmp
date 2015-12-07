/**
 * External dependencies
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

function Button( { to, children, className } ) {
	const classes = classnames( 'button', className );

	if ( to ) {
		return (
			<Link to={ to } className={ classes }>
				{ children }
			</Link>
		);
	}

	return (
		<button className={ classes }>
			{ children }
		</button>
	);
}

Button.propTypes = {
	to: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string
};

export default Button;
