//include styles
require('purecss/pure-min.css');
require('purecss/grids-responsive-min.css');
require('purecss/buttons-min.css');

//addtional styles
require('../css/styles.css');

//font awesome
require("font-awesome-webpack");

//generate application instance
var Marionette = require('marionette');
var app = new Marionette.Application();
app.addRegions({mainRegion: '#mainRegion'});
app.on("start", function() {
	//solve dependencies
	var _ = require('underscore');
	var models = require("./models.js");
	var views = require("./views.js");
	
	//build message
	var values = ['Hello', 'World'];
	var greeting = new models.Greeting({message: _.reduce(values, function (v1, v2) {
		return v1 + ' ' + v2;
	})});
	
	//show message
	var view = new views.GreetingView({model: greeting});
	this.mainRegion.show(view);
});

//initialize
var $ = require('jquery');

$(document).on('ready', function() {
	$('#action-button').click(function() {
		app.start();
	});
});
