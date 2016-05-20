angular.module('sc').controller('searchController',
    function($scope, $http, RESOURCES, $window, smartphoneService) {
        $scope.name = "";
        
        $scope.search = function () {
            $scope.smartphones = [];

            var url = RESOURCES.BASE + RESOURCES.SMARTPHONES + "?query=" + $scope.name;
            $http.get(url)
                .then(function(response) {
                    smartphoneService.addSmartphones(response.data);
                    $window.location.href = "#search";
                });
        };
    }
);