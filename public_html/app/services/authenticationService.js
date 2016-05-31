angular.module('sc')
    .service('authenticationService', function ($window) {

        var setToken = function(t) {
            $window.localStorage.setItem('token', t);
        };
            
        var getToken = function() {
            return $window.localStorage.getItem('token');
        };
            
        var removeToken = function() {
            $window.localStorage.removeItem('token');
        };

        var isAuthenticated = function() {
            return $window.localStorage.getItem('token') !== null;
        };
        
        var authHeader = function(user, pwd) {
            if (user !== null && pwd !== null) {
                return "Basic " + btoa(user + ":" + pwd);
            } else {
                return "Basic " + btoa(this.getToken() + ":");
            }
        };

        return {
            setToken: setToken,
            getToken: getToken,
            removeToken: removeToken,
            isUserAuthenticated: isAuthenticated,
            authHeader: authHeader
        };
    }
);