angular.module('sc').controller('smartphoneController',
    function($scope, $http, $window, RESOURCES, smartphoneService, authenticationService) {
        
        angular.element("#edit").hide();
        angular.element("#delete").hide();
        angular.element("#fav").hide();
        angular.element("#addReviewForm").hide();
        angular.element("#reviews").hide();
        
        if (authenticationService.isAuthenticated()) {
            
            angular.element("#fav").show();
            angular.element("#addReviewForm").show();
            
            if (authenticationService.getRole() === null) {
                authenticationService.fetchUserData();
            }
            
            if (authenticationService.getRole() === "ROLE_ADMIN") {
                angular.element("#edit").show();
                angular.element("#delete").show();
            } else if (authenticationService.getRole() === "ROLE_MODERATOR") {
                angular.element("#edit").show();
            }
        }
        
        var url = RESOURCES.BASE + RESOURCES.SMARTPHONES + "/" + smartphoneService.getUrlSmartphoneId();
        $http.get(url).then(function (response) {
            $scope.smartphone = response.data;
            $scope.smartphone.releaseDate = smartphoneService.getFormattedDate(new Date($scope.smartphone.releaseDate));
        }, function () {
            alert("El smartphone no existe");
        });
        
        $scope.deleteSmartphone = function() {
            if (confirm("Seguro que quieres borrar este smartphone?")) {
                var name = $scope.smartphone.brandName + " " + $scope.smartphone.modelName;
                var url = RESOURCES.BASE + RESOURCES.SMARTPHONES + "/" + smartphoneService.getUrlSmartphoneId();
                $http.delete(url)
                    .then(function () {
                        alert(name + " borrado");
                        $window.location.href = "#compare";
                    }, function () {
                        alert("El smartphone no existe");
                    });
            }
        };
        
        $scope.addToProfile = function() {
            var url = RESOURCES.BASE + RESOURCES.USERS + RESOURCES.LOGGED_IN + RESOURCES.SMARTPHONE;
            $http.put(url, {id: $scope.smartphone.id}, {
                headers: {
                    Authorization: authenticationService.authHeader()
                }
            }).then(function () {
                alert($scope.smartphone.brandName + " " + $scope.smartphone.modelName + " añadido al perfil");
            });
        };
        
        $scope.editSmartphone = function() {
            $window.location.href = "#edit/" + $scope.smartphone.id;
        };
        
        $scope.postReview = function() {
            var url = RESOURCES.BASE + RESOURCES.REVIEWS;
            $scope.review.smartphoneId = smartphoneService.getUrlSmartphoneId();
            $http.post(url, $scope.review, {
                headers: {
                    Authorization: authenticationService.authHeader()
                }
            }).then(function () {
                location.reload();
            });
        };
        
        $scope.showContributions = function() {
            angular.element("#reviews").show();
            var url = RESOURCES.BASE + RESOURCES.SMARTPHONES + "/" + smartphoneService.getUrlSmartphoneId() + RESOURCES.REVIEWS;
            $http.get(url).then(function (response) {
                if (response.data.length > 0) {
                    $scope.reviews = response.data;
                    for (var i = 0; i < $scope.reviews.length; i++) {
                        $scope.reviews[i].date = smartphoneService.getFormattedDate(new Date($scope.reviews[i].date));
                    }
                } else {
                    alert("No hay comentarios");
                }
            }, function () {
                alert("El smartphone no existe");
            });
        };
        
        $scope.deleteReview = function(id) {
            if (confirm("Seguro que quieres borrar este analisis?")) {
                var url = RESOURCES.BASE + RESOURCES.REVIEWS + "/" + id;
                $http.delete(url).then(function () {
                    var elem = angular.element(document.querySelector('#review_' + id));
                    elem.remove();
                    alert("Review borrada");
                });
            }
        };
        
        $scope.mustShow = function() {
            return (authenticationService.getRole() === "ROLE_MODERATOR" ||
                    authenticationService.getRole() === "ROLE_ADMIN") ? "visible" : "hidden";
        };
    }
);