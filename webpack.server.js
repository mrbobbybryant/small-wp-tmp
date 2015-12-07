var webpack = require( 'webpack' ),
	WebpackDevServer = require( 'webpack-dev-server' ),
	config = require( './webpack.config' );

new WebpackDevServer( webpack( config ), {
	contentBase: __dirname + '/public',
	hot: true,
	historyApiFallback: true,
	stats: {
		colors: true
	}
} ).listen( 3000, 'localhost', function( err ) {
	console.log( err ? err : 'Listening on port 3000...' );
} );
