angular.module('sc')
        .service('smartphoneService', function() {
        var smartphoneList = [];

        var addSmartphones = function(obj) {
            smartphoneList = obj;
        };

        var getSmartphones = function(){
            return smartphoneList;
        };

        return {
          addSmartphones: addSmartphones,
          getSmartphones: getSmartphones
        }; 
});