angular.module('sc').controller('profileController',
    function($scope, $http, RESOURCES, smartphoneService, authenticationService) {
        
        console.log(authenticationService.authHeader());
        
        var url = RESOURCES.BASE + RESOURCES.USERS;
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