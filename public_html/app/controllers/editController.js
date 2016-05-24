angular.module('sc').controller('editController',
    function($scope, $http, $window, RESOURCES, smartphoneService) {
        
        var url = RESOURCES.BASE + RESOURCES.SMARTPHONES + "/" + smartphoneService.getUrlSmartphoneId();
        $http.get(url).then(function (response) {
            $scope.phoneData = response.data;
            $scope.phoneData.releaseDate = smartphoneService.getFormattedDate(new Date($scope.phoneData.releaseDate));
          }, function () {
            alert("El snartphone no existe");
        });
            
        $scope.edit = function () {
            var id = smartphoneService.getUrlSmartphoneId();
            var url = RESOURCES.BASE + RESOURCES.SMARTPHONES + "/" + id;
            $http.put(url, $scope.phoneData)
                .then(function () {
                    $window.location.href = "#smartphone/" + id;
                }, function (response) {
                    if (response.status === 404) {
                        alert("El smartphone no existe");
                    } else if (response.status === 409) {
                        alert("El smartphone ya existe");
                    }
            });
        };
    }
);