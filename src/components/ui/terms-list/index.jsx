/**
 * External dependencies
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

function TermsList( { taxonomy, terms, icon, className } ) {
	const classes = classnames( 'terms-list', className, 'is-' + taxonomy );

	return (
		<ul className="terms-list__terms">
			{ terms.map( ( term ) => {
				return (
					<li key={ term.slug } className="terms-list__term">
						<Link to={ `/${ taxonomy }/${ encodeURIComponent( term.slug ) }` }>
							{ term.name }
						</Link>
					</li>
				);
			} ) }
		</ul>
	);
}

TermsList.propTypes = {
	taxonomy: PropTypes.string.isRequired,
	terms: PropTypes.array,
	icon: PropTypes.string,
	className: PropTypes.string
};

export default TermsList;
