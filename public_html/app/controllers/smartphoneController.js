angular.module('sc').controller('smartphoneController',
    function($scope, $http, $window, RESOURCES, smartphoneService, authenticationService) {
        
        angular.element("#edit").hide();
        angular.element("#delete").hide();
        
        if (authenticationService.isAuthenticated()) {
            
            if (authenticationService.getRole() === null) {
                authenticationService.fetchUserData();
            }
            console.log(authenticationService.getRole());
            if (authenticationService.getRole() === "ROLE_ADMIN") {
                angular.element("#edit").show();
                angular.element("#delete").show();
            } else if (authenticationService.getRole() === "ROLE_MODERATOR") {
                angular.element("#edit").show();
            }
        }
        
        var url = RESOURCES.BASE + RESOURCES.SMARTPHONES + "/" + smartphoneService.getUrlSmartphoneId();
        $http.get(url).then(function (response) {
            $scope.smartphone = response.data;
            $scope.smartphone.releaseDate = smartphoneService.getFormattedDate(new Date($scope.smartphone.releaseDate));
        }, function () {
            alert("El snartphone no existe");
        });
        
        $scope.deleteSmartphone = function() {
            var name = $scope.smartphone.brandName + " " + $scope.smartphone.modelName;
            var url = RESOURCES.BASE + RESOURCES.SMARTPHONES + "/" + smartphoneService.getUrlSmartphoneId();
            $http.delete(url)
                .then(function () {
                    alert(name + " borrado");
                    $window.location.href = "#compare";
                }, function () {
                    alert("El smartphone no existe");
                });
        };
    }
);