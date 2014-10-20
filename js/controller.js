var Marionette = require('marionette');
var _ = require('underscore');
var models = require("./models.js");
var views = require("./views.js");
		
var Controller = Marionette.Controller.extend({
	setRegion: function(region) {
		this.region = region;
	},
	
	displayHelloWorld: function() {
		//build message
		var values = ['Hello', 'World'];
		var greeting = new models.Greeting({message: _.reduce(values, function (v1, v2) {
			return v1 + ' ' + v2;
		})});
		
		//show message
		var view = new views.GreetingView({model: greeting});
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

		var about = new models.About({libs: libs});
		var view = new views.AboutView({model: about});
		this.region.show(view);
	}
});

var controller = new Controller();
module.exports = controller;
