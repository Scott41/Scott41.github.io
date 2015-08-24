var Backbone = require('backbone');
Backbone.$ = $;

var template = require('../../templates/menuView.html');

module.exports = Backbone.View.extend({

    el: $('header'),
    template: template,
    events: {

    },
    initialize: function() {

    },
    render: function() {
        this.$el.html(template());
    }
});