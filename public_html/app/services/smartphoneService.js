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

            return {
                setSmartphoneLeft: setSmartphoneLeft,
                setSmartphoneRight: setSmartphoneRight,
                getSmartphoneLeft: getSmartphoneLeft,
                getSmartphoneRight: getSmartphoneRight,
                getUrlSmartphoneId: getId,
                getFormattedDate: getFormattedDate
            };
        });