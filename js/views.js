//views
var Marionette = require('marionette');
var _ = require('underscore');
var models = require('./models.js');

var GreetingView = Marionette.ItemView.extend({
	model: models.Greeting,
	tagName: 'div',
	template: function(model) {
		return require('../templates/hello_world.html')(model);
	}
});

var AboutView = Marionette.ItemView.extend({
	model: models.About,
	tagName: 'div',
	template: function(model) {
		return require('../templates/about.hbs')(model);
	}
});

module.exports = {
	GreetingView: GreetingView,
	AboutView: AboutView
};
