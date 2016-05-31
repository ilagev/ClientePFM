angular.module('sc').controller('loginController',
    function($scope, $http, RESOURCES, authenticationService) {
        
        $scope.nick = "";
        $scope.pwd = "";
        
        angular.element("#menuloggedin").hide();
        angular.element("#newpage").hide();
        console.log(authenticationService.getToken());
        
        if (authenticationService.isUserAuthenticated()) {
            angular.element("#newpage").show();
            angular.element("#menuloggedin").show();
            angular.element("#menuloggedout").hide();
        }
        
        $scope.login = function() {
            var url = RESOURCES.BASE + RESOURCES.TOKENS;
            $http.post(url, null, {
                headers: {
                    Authorization: authenticationService.authHeader($scope.nick, $scope.pwd)
                }
            }).then(function (response) {
                console.log("Token = " + response.data.token);
                authenticationService.setToken(response.data.token);
                location.reload();
            }, function (response) {
                console.log(response);
            });
        };
        
        $scope.logout = function() {
            authenticationService.removeToken();
            location.reload();
        };
        
    }
);