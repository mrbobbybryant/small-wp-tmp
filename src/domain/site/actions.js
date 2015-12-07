
/**
 * Internal dependencies
 */

import fetchSiteFromApi from 'api/site/fetch';
import { FETCH_SITE, RECEIVE_SITE } from './action-types';

export function fetchSite() {
	return async ( dispatch ) => {
		dispatch( {
			type: FETCH_SITE
		} );

		const site = await fetchSiteFromApi();
		dispatch( {
			type: RECEIVE_SITE,
			payload: { site }
		} );
	};
}
