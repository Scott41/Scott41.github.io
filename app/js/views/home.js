var Backbone = require('backbone');
Backbone.$ = $;
var scrollTo = require('jquery.scrollto');

var template = require('../../templates/homeView.html');

module.exports = Backbone.View.extend({

    el: $('#content'),
    template: template,
    events: {
        'click #down-arrow': 'scrollToIntro'
    },
    initialize: function() {

    },
    render: function() {
        this.$el.html(template());
        window.scrollTo(0, 0);
        setTimeout(function () {
            //$('#down-arrow').mouseenter(function(){
                $('#down-arrow').removeAttr('style').css("-webkit-transition","all .25s ease-in-out")
                    .css("-moz-transition","all .25s ease-in-out")
                    .css("-o-transition","all .25s ease-in-out")
                    .css("transition","all .25s ease-in-out");
            //});
        }, 250)
    },
    scrollToIntro: function (e) {
        scrollTo('#intro',{duration: 700});
    }
});