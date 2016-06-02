angular.module('sc').controller('loginController',
    function($scope, authenticationService) {
        
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
            authenticationService.login($scope.nick, $scope.pwd);
        };
        
        $scope.logout = function() {
            authenticationService.removeToken();
            location.reload();
        };
        
    }
);