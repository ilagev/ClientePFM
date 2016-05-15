angular.module('sc').controller('searchResultController',
    function($scope, smartphoneService) {
        console.log(smartphoneService.getSmartphones());
        $scope.smartphones = smartphoneService.getSmartphones();
    }
);