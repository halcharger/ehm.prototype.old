'use strict';

var app = angular
    .module('EHM', [
        'ngRoute'
    ]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/dashboard.html'
        })
        .when('/movements', {
            templateUrl: 'views/movements.html'
        })
        .when('/projects', {
            templateUrl: 'views/projects.html'
        })
        .when('/reporting', {
            templateUrl: 'views/reporting.html'
        })
        .when('/editdelivery', {
            templateUrl: 'views/editdelivery.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
