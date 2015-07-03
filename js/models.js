// File: models.js

var Backbone = require('backbone');

var Greeting = Backbone.Model.extend({});
var About = Backbone.Model.extend({});

module.exports = {
	Greeting: Greeting,
	About: About
};
