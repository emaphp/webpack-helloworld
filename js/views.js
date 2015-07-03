// File: views.js

var Marionette = require('marionette');
var _ = require('underscore');
var models = require('./models.js');

// Application layout
var LayoutView = Marionette.LayoutView.extend({
    tagName: 'div',
    className: 'pure-u-1-1',
    template: require('../templates/layout.html'),
    
    regions: {
        mainRegion: '#main-region',
        buttonsRegion: '#buttons-region'
    },

    onBeforeShow: function() {
        this.getRegion('buttonsRegion').show(new ButtonsView());
    }
});

// Action buttons
var ButtonsView = Marionette.ItemView.extend({
    className: 'pure-u-1-1',
    template: require('../templates/buttons.html')
});

// 'Hello World' template
var GreetingView = Marionette.ItemView.extend({
	model: models.Greeting,
	tagName: 'div',
	template: function(model) {
		return require('../templates/hello_world.html')(model);
	}
});

// About template
var AboutView = Marionette.ItemView.extend({
	model: models.About,
	tagName: 'div',
	template: function(model) {
		return require('../templates/about.hbs')(model);
	}
});

module.exports = {
	LayoutView: LayoutView,
	GreetingView: GreetingView,
	AboutView: AboutView
};
