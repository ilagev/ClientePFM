angular.module('sc')
    .service('authenticationService', function ($window, RESOURCES, $http) {

        var setNick = function(nick) {
            $window.localStorage.setItem('nick', nick);
        };
        
        var getNick = function() {
            return $window.localStorage.getItem('nick');
        };
        
        var removeNick = function() {
            $window.localStorage.removeItem('nick');
        };

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
            if (!isAuthenticated()) {
                return "Basic " + btoa(user + ":" + pwd);
            } else {
                return "Basic " + btoa(this.getToken() + ":");
            }
        };
        
        var login = function(nick, pwd) {
            var url = RESOURCES.BASE + RESOURCES.TOKENS;
            $http.post(url, null, {
                headers: {
                    Authorization: authHeader(nick, pwd)
                }
            }).then(function (response) {
                console.log("Token = " + response.data.token);
                setToken(response.data.token);
                location.reload();
            }, function (response) {
                console.log(response);
            });
        };

        return {
            setToken: setToken,
            getToken: getToken,
            removeToken: removeToken,
            isUserAuthenticated: isAuthenticated,
            authHeader: authHeader,
            login: login,
            setNick: setNick,
            getNick: getNick,
            removeNick: removeNick
        };
    }
);