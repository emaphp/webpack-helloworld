// File: app.js

// Create application instance
var Marionette = require('marionette');
var app = new Marionette.Application();

// Configure regions
app.addRegions({
	body: 'body'
});

// Initialize controller on start
app.on('start', function() {
	// Initialize layout
	var Views = require('./views');
	var layout = new Views.LayoutView()
	app.getRegion('body').show(layout);

	// Setup controller
	var Controller = require('./controller');
	var controller = new Controller(layout.getRegion('mainRegion'));

	// Setup router
	var Router = require('./router');
	var router = new Router(controller);

	// Initialize history
	var Backbone = require('backbone');
	Backbone.history.start();
});

module.exports = app;