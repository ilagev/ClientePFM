angular.module('sc').controller('profileController',
    function($scope, $http, RESOURCES, authenticationService) {
        
        console.log(authenticationService.authHeader());
        
        var url = RESOURCES.BASE + RESOURCES.USERS + RESOURCES.LOGGED_IN;
        $http.get(url, {
            headers: {
                Authorization: authenticationService.authHeader()
            }
        }).then(function (response) {
            $scope.user = response.data;
        });
        
        $scope.edit = function() {
            console.log("coming soon...");
        };
        
    }
);