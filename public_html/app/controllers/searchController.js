angular.module('sc').controller('searchController',
    function($scope, $http, RESOURCES) {
        $scope.name = "";
        
        $scope.search = function () {
            console.log("Model name = " + $scope.name);
            
            var url = RESOURCES.BASE + RESOURCES.SMARTPHONES + "?query=" + $scope.name;
            $http.get(url)
                .then(function(response) {
                    console.log(response.data);
                });
        };
    }
);