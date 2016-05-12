angular.module('sc').controller('searchController',
    function($scope, $http) {
        $scope.name = "";
        
        $scope.search = function () {
            console.log("Model name = " + $scope.name);
        };
    }
);