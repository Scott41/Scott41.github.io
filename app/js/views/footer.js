var Backbone = require('backbone');
Backbone.$ = $;

var template = require('../../templates/footerView.html');

module.exports = Backbone.View.extend({

    el: $('footer'),
    template: template,
    events: {

    },
    initialize: function() {

    },
    render: function() {
        this.$el.html(template());
    }
});