const nodeExternals = require('webpack-node-externals');
const path = require('path');

const loaders = [{
	test: /\.jsx?$/,
	exclude: /(node_modules|bower_components)/,
	loader: 'babel-loader',
	query: {
		presets: ['es2015', 'react']
	}
}];
const paths = {
	CLIENT: path.join(__dirname, 'src/client.jsx'),
	SERVER: path.join(__dirname, 'src/server.jsx'),
	BUILD: path.join(__dirname, 'dist')
};
const client = {
	entry: paths.CLIENT,
	output: {
		path: paths.BUILD,
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css']
	},
	module: { loaders }
};
const server = {
	entry: paths.SERVER,
	output: {
		path: paths.BUILD,
		filename: 'server.js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css']
	},	
	module: { loaders },
	target: 'node',
	externals: [nodeExternals()]
};

module.exports = [client, server];
