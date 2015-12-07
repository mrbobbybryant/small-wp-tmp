/**
 * External dependencies
 */

import React, { Component, PropTypes } from 'react';

class Document extends Component {
	constructor( props ) {
		super( props );

		document.title = props.title;
	}

	render() {
		return (
			<div>
				{ this.props.children }
			</div>
		);
	}
}

Document.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node
};

export default Document;
