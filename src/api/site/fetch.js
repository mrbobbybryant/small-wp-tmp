/**
 * Internal dependencies
 */

import { API_ROOT, ROUTE_PREFIX } from 'config';

export default async function() {
	const response = await fetch( `${ API_ROOT }${ ROUTE_PREFIX }/site` );
	return response.json();
}
