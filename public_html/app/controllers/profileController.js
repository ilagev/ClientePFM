angular.module('sc').controller('profileController',
    function($scope, $http, RESOURCES, authenticationService) {
        
        $scope.new = "";
        $scope.newrep = "";
        
        var getUser = function() {
            var url = RESOURCES.BASE + RESOURCES.USERS + RESOURCES.LOGGED_IN;
            $http.get(url, {
                headers: {
                    Authorization: authenticationService.authHeader()
                }
            }).then(function (response) {
                $scope.user = response.data;
            });
        };
        
        getUser();
        
        $scope.edit = function() {
            
            if ($scope.new === $scope.newrep) {
                var url = RESOURCES.BASE + RESOURCES.USERS + RESOURCES.LOGGED_IN + RESOURCES.PASSWORD;
                $http.put(url, {newp: $scope.new}, {
                    headers: {
                        Authorization: authenticationService.authHeader()
                    }
                }).then(function (response) {
                    $scope.user = response.data;
                    alert("Contraseña cambiada correctamente");
                });
            } else {
                alert("Las contraseñas no coinciden, vuelve a intentarlo");
            }
        };
        
    }
);