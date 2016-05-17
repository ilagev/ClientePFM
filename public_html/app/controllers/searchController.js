angular.module('sc').controller('searchController',
    function($scope, $http, RESOURCES, $location, smartphoneService) {
        $scope.name = "";
        
        $scope.search = function () {
            console.log("Model name = " + $scope.name);
            
            $scope.smartphones = [];

            var url = RESOURCES.BASE + RESOURCES.SMARTPHONES + "?query=" + $scope.name;
            $http.get(url)
                .then(function(response) {
                    smartphoneService.addSmartphones(response.data);
                    $location.path("/search");
                });
        };
    }
);