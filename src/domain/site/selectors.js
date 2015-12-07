export function hasSite( state ) {
	return !! getSite( state );
}

export function getSite( state ) {
	return state.site.details || null;
}

export function getSiteIcon( state, size = 64 ) {
	if ( ! state.site.details ) {
		return null;
	}

	return state.site.details.icon[ size ] || null;
}
