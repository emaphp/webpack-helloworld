// File: controller.js

var Marionette = require('marionette');
var _ = require('underscore');
var Models = require("./models.js");
var Views = require("./views.js");
		
var Controller = Marionette.Controller.extend({
	initialize: function(region) {
		this.region = region;
	},
	
	displayHelloWorld: function() {
		// Build model instance
		var greeting = new Models.Greeting({
			message: 'Hello World'
		});
		
		// Build view instance
		var view = new Views.GreetingView({
			model: greeting
		});

		this.region.show(view);
	},
	
	displayAbout: function() {
		var libs = [
			{name: "Underscore", url: "http://underscorejs.org"},
			{name: "Backbone", url: "http://backbonejs.org/"},
			{name: "Marionette", url: "http://marionettejs.com/"},
			{name: "PureCSS", url:"http://purecss.io/"},
			{name: "FontAwesome", url: "http://fortawesome.github.io/Font-Awesome/"}
		];

		var about = new Models.About({libs: libs});
		var view = new Views.AboutView({model: about});
		this.region.show(view);
	}
});

module.exports = Controller;
