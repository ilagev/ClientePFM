angular.module('sc').controller('userController',
    function($scope, $http, RESOURCES, smartphoneService) {
        
        angular.element("#contributions").hide();
        
        var url = RESOURCES.BASE + RESOURCES.USERS + "/" + smartphoneService.getUrlSmartphoneId(); // same for userId
        $http.get(url).then(function (response) {
            $scope.user = response.data;
        }, function () {
            alert("El usuario no existe");
        });
        
        $scope.showContributions = function() {
            angular.element("#contributions").show();
            var url = RESOURCES.BASE + RESOURCES.USERS + "/" + $scope.user.id + RESOURCES.SMARTPHONES;
            $http.get(url).then(function (response) {
                $scope.smartphones = response.data;
            });
        };
        
    }
);