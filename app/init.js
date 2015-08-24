var Backbone = require('backbone');
Backbone.$ = $;

var app = require('./app');
var Router = require('./router');

    app.router = new Router();

    Backbone.history.start();