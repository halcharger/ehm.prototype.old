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
        .when('/alldeliveries', {
            templateUrl: 'views/alldeliveries.html'
        })
        .when('/projects', {
            templateUrl: 'views/projects.html'
        })
        .when('/reporting', {
            templateUrl: 'views/reporting.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
