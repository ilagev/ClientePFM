angular.module('sc').controller('registerController',
    function($scope, $http, RESOURCES, authenticationService) {
        $scope.user = {
            nick: "",
            mail: "",
            password: ""
        };
        
        $scope.pwdrep = "";
        
        $scope.register = function() {
            console.log("register coming soon....");
            if ($scope.pwdrep === $scope.user.password) {
                var url = RESOURCES.BASE + RESOURCES.USERS;
                $http.post(url, $scope.user)
                    .then(function (response) {
                        console.log("Usuario " + response.data.nick + " dado de alta! :D");
                        authenticationService.login($scope.user.nick, $scope.user.password);
                }, function (response) {
                    console.log(response.status);
                    console.log(response.data);
                });
            } else {
                alert("No es la misma contraseña!!!");
            }
        };
        
        $scope.existsUser = function() {
            var url = RESOURCES.BASE + RESOURCES.USERS;
            $http.get(url, {
                params: {
                    nick: ($scope.user.nick !== null) ? $scope.user.nick : "",
                    mail: ($scope.user.mail !== null) ? $scope.user.mail : ""
                }
            }).then(function(response) {
                if (response.data === "true") {
                    alert("El usuario ya existe!!!");
                }
            });
        };
    }
);