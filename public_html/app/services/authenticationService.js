angular.module('sc')
    .service('authenticationService', function ($window, RESOURCES, $http) {

        var setToken = function(t) {
            $window.sessionStorage.setItem('token', t);
        };
            
        var getToken = function() {
            return $window.sessionStorage.getItem('token');
        };
            
        var removeToken = function() {
            $window.sessionStorage.removeItem('token');
        };
        
        var setUser = function(u) {
            $window.sessionStorage.setItem('user', u);
        };
            
        var getUser = function() {
            return $window.sessionStorage.getItem('user');
        };
            
        var removeUser = function() {
            $window.sessionStorage.removeItem('user');
        };
        
        var setRole = function(r) {
            $window.sessionStorage.setItem('role', r);
        };
            
        var getRole = function() {
            return $window.sessionStorage.getItem('role');
        };
            
        var removeRole = function() {
            $window.sessionStorage.removeItem('role');
        };

        var isAuthenticated = function() {
            return $window.sessionStorage.getItem('token') !== null;
        };
        
        var authHeader = function(user, pwd) {
            if (!isAuthenticated()) {
                return "Basic " + btoa(user + ":" + pwd);
            } else {
                return "Basic " + btoa(getToken() + ":");
            }
        };
        
        var login = function(nick, pwd) {
            var url = RESOURCES.BASE + RESOURCES.TOKENS;
            $http.post(url, null, {
                headers: {
                    Authorization: authHeader(nick, pwd)
                }
            }).then(function (response) {
                setToken(response.data.token);
                setUser(nick);
                location.reload();
            }, function () {
                alert("Login no valido");
            });
        };
        
        var logout = function() {
            removeToken();
            removeUser();
            removeRole();
            location.reload();
        };
        
        var fetchUserData = function() {
            var url = RESOURCES.BASE + RESOURCES.USERS + RESOURCES.LOGGED_IN;
            $http.get(url, {
                headers: {
                    Authorization: authHeader()
                }
            }).then(function (response) {
                setRole(response.data.role);
                location.reload();
            });
        };
                
        return {
            isAuthenticated: isAuthenticated,
            authHeader: authHeader,
            login: login,
            logout: logout,
            getUser: getUser,
            getRole: getRole,
            fetchUserData: fetchUserData
        };
    }
);