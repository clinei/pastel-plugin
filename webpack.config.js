/* eslint-env es6, node */
"use strict";
const webpack = require("webpack");
module.exports = {
	context: __dirname,
	entry: "./index.js",
	devtool: "#cheap-module-source-map",
	output: {
		filename: "./bundle.js",
		sourceMapFilename: "[file].map",
	},

	module: {
		preLoaders: [{
			include: /js$/,
			exclude: "node_modules",
			loader: "eslint-loader",
		}],
		loaders: [{
			include: /js$/,
			exclude: "node_modules",
			loader: "babel-loader",
			query: {
				presets: ["es2015"],
			},
		}],
	},
	plugins: [
		new webpack.optimize.DedupePlugin({
			include: /js$/,
			exclude: "node_modules",
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			include: /js$/,
			exclude: "node_modules",
			mangle: {except: []},
			output: {ascii_only: true},
		}),
	],
};
