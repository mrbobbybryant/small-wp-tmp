<?php

class Small_REST_Site_Controller extends WP_REST_Controller {
	/**
	 * Register the routes for the objects of the controller.
	 */
	public function register_routes() {
		$query_params = $this->get_collection_params();
		register_rest_route( 'small/v1', '/site', array(
			array(
				'methods'  => WP_REST_Server::READABLE,
				'callback' => array( $this, 'get_site' )
			),
			'schema' => array( $this, 'get_public_item_schema' ),
		) );
	}

	/**
	 * Get the current site details.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function get_site( $request ) {
		return array(
			'name' => get_bloginfo( 'name' ),
			'home_url' => home_url(),
			'icon' => array(
				'64' => get_site_icon_url( 64 )
			)
		);
	}
}
