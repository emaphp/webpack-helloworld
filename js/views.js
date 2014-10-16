//views
var Marionette = require('marionette');
var models = require('./models.js');

var GreetingView = Marionette.ItemView.extend({
	model: models.Greeting,
	tagName: 'div',
	template: '#greetingView'
});

module.exports = {
	GreetingView: GreetingView
};
