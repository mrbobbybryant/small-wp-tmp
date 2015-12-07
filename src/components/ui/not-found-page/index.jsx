/**
 * External dependencies
 */

import React from 'react';

/**
 * Internal dependencies
 */

import Document from 'components/data/document';
import Button from 'components/ui/button';

export default function NotFoundPage() {
	return (
		<Document title="404">
			<h2>Page not found!</h2>
			<p>Sorry, but the page you were looking for could not be found.</p>
			<p><Button to="/">Return Home</Button></p>
		</Document>
	);
}
