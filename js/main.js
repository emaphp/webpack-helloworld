// File: main.js

// PureCSS styles
require('purecss/build/pure-min.css');
require('purecss/build/grids-responsive-min.css');
require('purecss/build/buttons-min.css');

// Custom styles
require('../css/styles.css');

// Font-Awesome
require("font-awesome-webpack");

// Handlebars helpers
require('./helpers.js');

// Initialize
var $ = require('jquery');

$(document).on('ready', function() {
    var app = require('./app');
    app.start();
});