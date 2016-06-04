angular.module('sc').controller('loginController',
    function($scope, authenticationService) {
        
        $scope.nick = "";
        $scope.pwd = "";
        
        angular.element("#menuloggedin").hide();
        angular.element("#newpage").hide();
        
        if (authenticationService.isAuthenticated()) {
            angular.element("#newpage").show();
            angular.element("#menuloggedin").show();
            angular.element("#menuloggedout").hide();
            $scope.nick = authenticationService.getUser();
        }
        
        $scope.login = function() {
            authenticationService.login($scope.nick, $scope.pwd);
        };
        
        $scope.logout = function() {
            authenticationService.logout();
            $scope.nick = "";
        };
        
    }
);