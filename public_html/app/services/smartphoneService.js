angular.module('sc')
        .service('smartphoneService', function () {
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

            return {
                setSmartphoneLeft: setSmartphoneLeft,
                setSmartphoneRight: setSmartphoneRight,
                getSmartphoneLeft: getSmartphoneLeft,
                getSmartphoneRight: getSmartphoneRight
            };
        });