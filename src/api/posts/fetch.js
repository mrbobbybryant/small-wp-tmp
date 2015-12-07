/**
 * Internal dependencies
 */

import { API_ROOT } from 'config';

export default async function( query = '' ) {
	const response = await fetch( `${ API_ROOT }/wp/v2/posts?${ query }` );
	const body = await response.json();

	return {
		headers: response.headers,
		posts: body
	};
}
