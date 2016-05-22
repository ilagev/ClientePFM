angular.module('sc')
        .service('smartphoneService', function() {
        var smartphoneList = [];

        var addSmartphone = function(obj) {
            if (!(obj in smartphoneList)) {
                smartphoneList.push(obj);
            }
        };

        var getSmartphones = function(){
            return smartphoneList;
        };
        
        var clearSmartphones = function(){
            smartphoneList = [];
        };

        return {
          addSmartphone: addSmartphone,
          getSmartphones: getSmartphones,
          clearSmartphones: clearSmartphones
        }; 
});