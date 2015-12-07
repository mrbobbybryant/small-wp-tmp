/**
 * External dependencies
 */

import { connect } from 'react-redux';

/**
 * Internal dependencies
 */

import Logo from 'components/ui/logo';
import { getSite, getSiteIcon } from 'domain/site/selectors';

export default connect( ( state ) => {
	const site = getSite( state );
	return {
		image: getSiteIcon( state ),
		url: site ? site.home_url : null
	};
} )( Logo );
