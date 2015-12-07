/**
 * External dependencies
 */

import pick from 'lodash/object/pick';

export default function( object ) {
	let post = pick( object, [
		'id',
		'date',
		'date_gmt',
		'modified',
		'modified_gmt',
		'slug',
		'type',
		'link',
		'author',
		'featured_image',
		'comment_status',
		'ping_status',
		'sticky',
		'format'
	] );

	[ 'title', 'content', 'excerpt' ].forEach( ( content ) => {
		post[ content ] = object[ content ].rendered;
	} );

	post.terms = {};
	const terms = object._embedded ? object._embedded[ 'https://api.w.org/term' ] : [];
	[ 'category', 'post_tag' ].forEach( ( taxonomy ) => {
		post.terms[ taxonomy ] = terms.filter( ( term ) => {
			return term.taxonomy === taxonomy;
		} );
	} );

	return post;
}
