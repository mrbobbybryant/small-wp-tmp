/**
 * External dependencies
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Internal dependencies
 */

import { fetchSite } from 'domain/site/actions';
import { hasSite } from 'domain/site/selectors';
import Header from 'components/ui/header';
import Content from 'components/ui/content';

class BaseRoute extends Component {
	static propTypes = {
		location: PropTypes.object.isRequired,
		children: PropTypes.node
	}

	constructor( props ) {
		super( props );

		if ( ! props.hasSite ) {
			props.fetchSite();
		}
	}

	render() {
		return (
			<div>
				<Header />
				<Content>
					{ this.props.children }
				</Content>
			</div>
		);
	}
}

export default connect( ( state ) => {
	return {
		hasSite: hasSite( state )
	};
}, ( dispatch ) => {
	return bindActionCreators( {
		fetchSite
	}, dispatch );
} )( BaseRoute );
