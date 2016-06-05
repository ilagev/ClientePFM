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
        .when('/user/:id',{
            templateUrl : 'app/views/user.html',
            controller  : 'userController'
        })
        .when('/compare',{
            templateUrl : 'app/views/compare.html',
            controller  : 'compareController'
        })
        .when('/edit/:id',{
            templateUrl : 'app/views/edit.html',
            controller  : 'editController'
        })
        .when('/profile',{
            templateUrl : 'app/views/profile.html',
            controller  : 'profileController'
        })
        .when('/register',{
            templateUrl : 'app/views/register.html',
            controller  : 'registerController'
        })
        .otherwise({
            redirectTo : '/compare'
        });
        
});