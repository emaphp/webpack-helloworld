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

module.exports = {
	GreetingView: GreetingView
};
