angular.module('sc').controller('compareController',
    function($scope, smartphoneService, authenticationService, $http, RESOURCES) {
        var colorMoreThan = "Chartreuse";
        var colorLessThan = "red";
        var colorEquals   = "grey";
        
        $scope.names1 = "";
        $scope.names2 = "";
        
        $scope.smartphoneLeft = {
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
        
        $scope.smartphoneRight = {
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
        angular.element("#myphone").hide();
        
        if (authenticationService.isAuthenticated()) {
            angular.element("#myphone").show();
        }
        
        $scope.compare = function() {
            $scope.smartphoneLeft = smartphoneService.getSmartphoneLeft();
            $scope.smartphoneRight = smartphoneService.getSmartphoneRight();
            angular.element("#comparisonTable").show();
        };
        
        $scope.compareToMine = function() {
            var url = RESOURCES.BASE + RESOURCES.USERS + RESOURCES.LOGGED_IN + RESOURCES.SMARTPHONE;
            $http.get(url, {
                headers: {
                    Authorization: authenticationService.authHeader()
                }
            }).then(function (response) {
                if (response.data.modelName !== undefined) {
                    $scope.smartphoneLeft = response.data;
                } else {
                    alert("No tienes ningún móvil asignado...");
                }
            });
        };
        
        $scope.compareRAM = function() {
            if ($scope.smartphoneRight.ram > $scope.smartphoneLeft.ram) {
                return colorMoreThan;
            } else if ($scope.smartphoneRight.ram < $scope.smartphoneLeft.ram) {
                return colorLessThan;
            } else {
                return colorEquals;
            }
        };
        
        $scope.compareROM = function() {
            if ($scope.smartphoneRight.rom > $scope.smartphoneLeft.rom) {
                return colorMoreThan;
            } else if ($scope.smartphoneRight.rom < $scope.smartphoneLeft.rom) {
                return colorLessThan;
            } else {
                return colorEquals;
            }
        };
        
        $scope.compareScreenSize = function() {
            if ($scope.smartphoneRight.screenSize > $scope.smartphoneLeft.screenSize) {
                return colorMoreThan;
            } else if ($scope.smartphoneRight.screenSize < $scope.smartphoneLeft.screenSize) {
                return colorLessThan;
            } else {
                return colorEquals;
            }
        };
        
        $scope.compareResolution = function() {
            var res1 = $scope.smartphoneLeft.resolutionX * $scope.smartphoneLeft.resolutionY;
            var res2 = $scope.smartphoneRight.resolutionX * $scope.smartphoneRight.resolutionY;
            if (res2 > res1) {
                return colorMoreThan;
            } else if (res2 < res1) {
                return colorLessThan;
            } else {
                return colorEquals;
            }
        };
        
        $scope.compareBattery = function() {
            if ($scope.smartphoneRight.battery > $scope.smartphoneLeft.battery) {
                return colorMoreThan;
            } else if ($scope.smartphoneRight.battery < $scope.smartphoneLeft.battery) {
                return colorLessThan;
            } else {
                return colorEquals;
            }
        };
        
        $scope.compareSize = function() {
            if ($scope.smartphoneRight.size > $scope.smartphoneLeft.size) {
                return colorLessThan;
            } else if ($scope.smartphoneRight.size < $scope.smartphoneLeft.size) {
                return colorMoreThan;
            } else {
                return colorEquals;
            }
        };
        
        $scope.compareWeight = function() {
            if ($scope.smartphoneRight.weight > $scope.smartphoneLeft.weight) {
                return colorLessThan;
            } else if ($scope.smartphoneRight.weight < $scope.smartphoneLeft.weight) {
                return colorMoreThan;
            } else {
                return colorEquals;
            }
        };
        
        $scope.compareGPS = function() {
            if ($scope.smartphoneRight.gps > $scope.smartphoneLeft.gps) {
                return colorMoreThan;
            } else if ($scope.smartphoneRight.gps < $scope.smartphoneLeft.gps) {
                return colorLessThan;
            } else {
                return colorEquals;
            }
        };
        
        $scope.compareNFC = function() {
            if ($scope.smartphoneRight.nfc > $scope.smartphoneLeft.nfc) {
                return colorMoreThan;
            } else if ($scope.smartphoneRight.nfc < $scope.smartphoneLeft.nfc) {
                return colorLessThan;
            } else {
                return colorEquals;
            }
        };
        
        $scope.compareBluetooth = function() {
            if ($scope.smartphoneRight.bluetooth > $scope.smartphoneLeft.bluetooth) {
                return colorMoreThan;
            } else if ($scope.smartphoneRight.bluetooth < $scope.smartphoneLeft.bluetooth) {
                return colorLessThan;
            } else {
                return colorEquals;
            }
        };
    }
);