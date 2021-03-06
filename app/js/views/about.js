var Backbone = require('backbone');
Backbone.$ = $;

var template = require('../../templates/aboutView.html');

module.exports = Backbone.View.extend({

    el: $('#content'),
    template: template,
    events: {

    },
    initialize: function() {

    },
    render: function() {
        this.$el.html(template());
        window.scrollTo(0, 0);
        document.title = "Scott A. - About Me";
    }
});