angular.module('sc').controller('editController',
    function($scope, $http, RESOURCES, smartphoneService) {
        
        var getFormattedDate = function(date) {
            var dd = date.getDate();
            var mm = date.getMonth() + 1;
            var yy = date.getFullYear();
            if (dd < 10){
                dd = '0' + dd;
            } 
            if (mm < 10){
                mm = '0' + mm;
            }
            return yy + '-' + mm + '-' + dd;
        };
        
        var url = RESOURCES.BASE + RESOURCES.SMARTPHONES + "/" + smartphoneService.getUrlSmartphoneId();
        $http.get(url).then(function(response) {
            $scope.phoneData = response.data;
            $scope.phoneData.releaseDate = getFormattedDate(new Date($scope.phoneData.releaseDate));
        });
            
        $scope.edit = function () {
            // TODO
            console.log($scope.phoneData);
        };
    }
);