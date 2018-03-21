'use strict';

var angular = require('angular');
require('angular-route');
require('ngstorage');

var app = angular.module(
    'hrsBlog',
    ['ngRoute', 'ngStorage'],
    function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'home.html'});
        $routeProvider.when('/post/:id',{ templateUrl: 'post.html'}); // sets template to display at url
        $routeProvider.otherwise({redirectTo: '/'}); // resets all url that arent '/' to '/'
    }
);

app.controller('homeController', require('./home.js'));
app.controller('postController', require('./post.js'));
