angular.module('sc').config(function($routeProvider) {

    $routeProvider
        .when('/new', {
            templateUrl : 'app/views/new.html',
            controller  : 'newController'
        })
        .when('/smartphone/:id',{
            templateUrl : 'app/views/smartphone.html',
            controller  : 'smartphoneController'
        })
        .when('/compare',{
            templateUrl : 'app/views/compare.html',
            controller  : 'compareController'
        })
        .when('/edit/:id',{
            templateUrl : 'app/views/edit.html',
            controller  : 'editController'
        })
        .otherwise({
            redirectTo : '/compare'
        });
});