angular.module('sc').controller('smartphoneController',
    function($scope, $http, $window, RESOURCES, smartphoneService) {
        
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