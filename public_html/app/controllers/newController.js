angular.module('sc').controller('newController',
    function($scope, $http, RESOURCES, $location) {
        $scope.phoneData = {
            modelName : "",
            brandName : "",
            releaseDate : null,
            screenSize : 0,
            resolutionX : 0,
            resolutionY : 0,
            ram : 0,
            rom : 0,
            battery : 0,
            weight : 0,
            height : 0,
            width : 0,
            thickness : 0,
            gps : false,
            nfc : false,
            bluetooth : false
        };
        
        $scope.register = function () {
            var url = RESOURCES.BASE + RESOURCES.SMARTPHONES;
            $http.post(url, $scope.phoneData)
                .success(function(data) {
                    $location.path("/smartphone/" + data.id);
            });
        };
    }
);