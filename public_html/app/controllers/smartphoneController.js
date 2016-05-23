angular.module('sc').controller('smartphoneController',
    function($scope, $http, RESOURCES, smartphoneService) {
        
        var url = RESOURCES.BASE + RESOURCES.SMARTPHONES + "/" + smartphoneService.getUrlSmartphoneId();
        $http.get(url).then(function(response) {
            $scope.smartphone = response.data;
            $scope.smartphone.releaseDate = new Date($scope.smartphone.releaseDate).toLocaleString();
        });
    }
);