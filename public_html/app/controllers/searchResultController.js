angular.module('sc').controller('searchResultController',
    function($scope, smartphoneService) {
        $scope.smartphones = smartphoneService.getSmartphones();
    }
);