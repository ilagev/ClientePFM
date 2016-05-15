angular.module('sc').controller('smartphoneController',
    function($scope, $location, $http, RESOURCES) {
        var url = $location.path().split("/");
        var id = url[url.length - 1];
        console.log(url);
        console.log(id);
        
        var url = RESOURCES.BASE + RESOURCES.SMARTPHONES + "/" + id;
        $http.get(url).then(function(response) {
            $scope.smartphone = response.data;
            $scope.smartphone.releaseDate = new Date($scope.smartphone.releaseDate).toLocaleString();
        });
    }
);