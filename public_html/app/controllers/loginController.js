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
            $scope.nick = authenticationService.getNick();
        }
        
        $scope.login = function() {
            authenticationService.setNick($scope.nick);
            authenticationService.login($scope.nick, $scope.pwd);
        };
        
        $scope.logout = function() {
            authenticationService.removeToken();
            authenticationService.removeNick();
            location.reload();
        };
        
    }
);