module.exports = {
    entry: "./js/app.js",
	resolve: {
		alias: {
			"underscore": "backbone.marionette/node_modules/underscore",
			"backbone": "backbone.marionette/node_modules/backbone",
			"marionette": "backbone.marionette"
		}
	},
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    }
};
