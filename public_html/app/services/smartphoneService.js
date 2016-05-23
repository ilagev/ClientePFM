angular.module('sc')
        .service('smartphoneService', function ($location) {
            var smartphoneLeft, smartphoneRight;
    
            var setSmartphoneLeft = function(s) {
                smartphoneLeft = s;
            };
            
            var setSmartphoneRight = function(s) {
                smartphoneRight = s;
            };
            
            var getSmartphoneLeft = function() {
                return smartphoneLeft;
            };
            
            var getSmartphoneRight = function() {
                return smartphoneRight;
            };
            
            var getId = function() {
                var url = $location.path().split("/");
                return url[url.length - 1];
            };

            return {
                setSmartphoneLeft: setSmartphoneLeft,
                setSmartphoneRight: setSmartphoneRight,
                getSmartphoneLeft: getSmartphoneLeft,
                getSmartphoneRight: getSmartphoneRight,
                getUrlSmartphoneId: getId
            };
        });