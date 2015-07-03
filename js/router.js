// File: router.js

var Marionette = require('marionette');
var controller = require('./controller');

var Router = Marionette.AppRouter.extend({
    initialize: function(controller) {
        this.controller = controller;
        this.processAppRoutes(this.controller, {
            "hello": "displayHelloWorld",
            "about": "displayAbout"
        });
    }
});

module.exports = Router;