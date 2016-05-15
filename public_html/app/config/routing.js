angular.module('sc').config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/new', {
            templateUrl : 'app/views/new.html',
            controller  : 'newController'
        })
        .when('/search', {
            templateUrl : 'app/views/search.html',
            controller  : 'searchResultController'
        })
        .otherwise({
            redirectTo : '/'
        });
});