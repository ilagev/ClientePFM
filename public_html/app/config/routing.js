angular.module('sc').config(function($routeProvider) {

    $routeProvider
        .when('/new', {
            templateUrl : 'app/views/new.html',
            controller  : 'newController'
        })
        .when('/search', {
            templateUrl : 'app/views/search.html',
            controller  : 'searchResultController'
        })
        .when('/smartphone/:id',{
            templateUrl : 'app/views/smartphone.html',
            controller  : 'smartphoneController'
        })
        .otherwise({
            redirectTo : '/'
        });
});