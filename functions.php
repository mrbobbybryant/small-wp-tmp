<?php

function small_render_template() {
	if ( is_admin() ) {
		return;
	}

	include dirname( __FILE__ ) . '/index.php';
	exit;
}
add_action( 'parse_request', 'small_render_template' );

function small_scripts() {
	// Styles
	wp_enqueue_style( 'small-fonts', 'https://fonts.googleapis.com/css?family=Merriweather:400,400italic,700,700italic|Open+Sans:400,400italic,700,700italic' );
	wp_enqueue_style( 'font-awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css' );
	wp_enqueue_style( 'highlight', 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.7/styles/obsidian.min.css' );

	// Scripts
	$bundle_root = SCRIPT_DEBUG ? 'http://localhost:3000' : get_template_directory_uri() . '/dist';
	wp_enqueue_script( 'small-bundle', $bundle_root . '/bundle.js', array(), null, true );
}
add_action( 'wp_enqueue_scripts', 'small_scripts' );

function small_register_rest_routes() {
	// Site
	require_once dirname( __FILE__ ) . '/lib/endpoints/class-small-rest-site-controller.php';
	$controller = new Small_REST_Site_Controller;
	$controller->register_routes();
}
add_action( 'rest_api_init', 'small_register_rest_routes' );
