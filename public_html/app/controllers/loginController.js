angular.module('sc').controller('loginController',
    function($scope, $http, RESOURCES, authenticationService) {
        
        $scope.nick = "";
        $scope.pwd = "";
        
        $scope.login = function() {
            var url = RESOURCES.BASE + RESOURCES.TOKENS;
            $http({
                method: 'POST',
                url: url,
                headers: {
                    Authorization: authenticationService.authHeader($scope.nick, $scope.pwd)
                }
            }).then(function (response) {
                console.log(response.data);
            }, function (response) {
                console.log(response);
            });
        };
        
    }
);