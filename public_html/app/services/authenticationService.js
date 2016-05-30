angular.module('sc')
    .service('authenticationService', function () {
        var token;

        var setToken = function(t) {
            token = t;
        };
            
        var getToken = function() {
            return token;
        };
            
        var deleteToken = function() {
            token = "";
        };

        var isAuthenticated = function() {
            return token !== "";
        };
        
        var authHeader = function(user, pwd) {
            if (user !== null && pwd !== null) {
                return "Basic " + btoa(user + ":" + pwd);
            } else {
                return "Basic " + btoa(token + ":");
            }
        };

        return {
            setToken: setToken,
            getToken: getToken,
            removeToken: deleteToken,
            isUserAuthenticated: isAuthenticated,
            authHeader: authHeader
        };
    }
);