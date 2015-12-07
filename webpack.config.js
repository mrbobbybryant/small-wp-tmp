/**
 * External dependencies
 */

var webpack = require( 'webpack' );

module.exports = {
	cache: true,
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		__dirname + '/src/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
		publicPath: '/wp-content/themes/small/'
	},
	devtool: 'source-map',
	resolve: {
		extensions: [ '', '.json', '.js', '.jsx' ],
		root: [
			__dirname + '/src'
		]
	},
	node: {
		console: true,
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: __dirname + '/src',
				loaders: [ 'babel?cacheDirectory' ]
			},
			{
				test: /\.scss$/,
				loaders: [ 'style', 'css', 'autoprefixer', 'sass' ]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.ProvidePlugin( {
			fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
		} ),
		new webpack.DefinePlugin( {
			'process.env.API_ROOT': JSON.stringify( process.env.API_ROOT )
		} )
	]
};
