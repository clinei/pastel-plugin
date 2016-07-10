/* eslint-env es6, node */
"use strict";
const webpack = require("webpack");
webpack({
	context: __dirname,
	entry: "./index.js",
	devtool: "#source-map",
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
			output: {ascii_only: true},
		}),
	],
}).run((error, stats) => {
	if (error === null) {
		console.log(stats.toString({colors: true}));
	} else {
		console.warn(error);
	}
});
