//include styles
require('purecss/pure-min.css');
require('purecss/grids-responsive-min.css');
require('purecss/buttons-min.css');

//addtional styles
require('../css/styles.css');

//font awesome
require("font-awesome-webpack");

//handlebars helpers
require('./helpers.js');

//generate application instance
var Marionette = require('marionette');
var app = new Marionette.Application();
app.addRegions({mainRegion: '#mainRegion'});
app.on("start", function() {
	var controller = require('./controller.js');
	controller.setRegion(this.mainRegion);
});

//initialize
var $ = require('jquery');

$(document).on('ready', function() {
	app.start();
	var controller = require('./controller.js');
	
	$('#hello-action').click(function() {
		controller.displayHelloWorld();
	});
	
	$('#about-action').click(function() {
		controller.displayAbout();
	});
});
