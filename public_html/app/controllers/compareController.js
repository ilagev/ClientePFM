angular.module('sc').controller('compareController',
    function($scope, smartphoneService) {
        $scope.names1 = "";
        $scope.names2 = "";
        
        $scope.smartphone1 = {
            id: 0,
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
        
        $scope.smartphone2 = {
            id: 0,
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
        
        angular.element("#comparisonTable").hide();
        
        $scope.compare = function() {
            angular.element("#comparisonTable").show();
            $scope.smartphone1 = smartphoneService.getSmartphones()[0];
            $scope.smartphone2 = smartphoneService.getSmartphones()[1];
        };
    }
);