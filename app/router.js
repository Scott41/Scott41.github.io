var Backbone = require('backbone');
Backbone.$ = $;

var app = require('./app');
var MenuView = require('./js/views/menu');
var FooterView = require('./js/views/footer');
var HomeView = require('./js/views/home');
var AboutView = require('./js/views/about');
var ProjectsView = require('./js/views/projects');
var ContactView = require('./js/views/contact');

    module.exports = Backbone.Router.extend({
        routes: {
            '': 'index',
            'about': 'about',
            'projects': 'projects',
            'contact': 'contact'
        },

        initialize: function() {
            this.on('route', this.updateMenuAndBg);
            var menuView = new MenuView();
            menuView.render();
            var footerView = new FooterView();
            footerView.render();
            this.downArrowLoadAnimation();
        },

        index: function() {
            var home = new HomeView();
            home.render();
        },
        about: function () {
            var about = new AboutView();
            about.render();
        },
        projects: function () {
            var projects = new ProjectsView();
            projects.render();
        },
        contact: function () {
            var contacts = new ContactView();
            contacts.render();
        },
        downArrowLoadAnimation: function () {
            setTimeout(function () {
                $('#down-arrow').addClass('offset-arrow');
                setTimeout(function () {
                    $('#down-arrow').css("-webkit-transition","all 1.0s ease-out")
                        .css("-moz-transition","all 1.0s ease-out")
                        .css("-o-transition","all 1.0s ease-out")
                        .css("transition","all 1.0s ease-out");
                }, 150);
                setTimeout(function () {
                    $('#down-arrow').removeClass('offset-arrow');
                }, 151);
            }, 0);
        },
        updateMenuAndBg: function (page) {
            if (page !== 'index') {
                $('body').removeClass('bg');
                $('#menu-bar').addClass('shadow');
                $('footer').show();
            } else {
                $('body').addClass('bg');
                $('#menu-bar').removeClass('shadow');
                $('footer').hide();
            }
            $('.menu-btn a').removeClass('selected');
            var link = '#' + page + '-link a';
            $(link).addClass('selected');
        }
    });
