'use strict';

angular.module('app').config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/main', {
        template: `<main></main>`
    })
    .when('/about', {
        template: `<about></about>`
    })
    .when('/contact', {
        template: `<contact></contact>`
    })
    .otherwise({
        redirectTo: `/main`
    });
}]);