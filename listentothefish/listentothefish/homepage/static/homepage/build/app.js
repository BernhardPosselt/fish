(function(window, $, angular, undefined) {
var app = angular.module('ListenToTheFish', ['ngAnimate', 'ngRoute']);
app.config(['$interpolateProvider', '$routeProvider', '$provide',
    function($interpolateProvider, $routeProvider, $provide) {

    // use [[ ]] instead of {{ }} because django already uses them
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');

    var baseUrl = '/';
    var apiUrl = baseUrl;
    var partialUrl = baseUrl + 'static/homepage/partials/';

    $routeProvider.when('/', {
        controller: 'EventController',
        templateUrl: partialUrl + 'events.html',
        activeTab: 'events',
        resolve: {
            events: ['$http', '$q', function($http, $q) {
                var deferred = $q.defer();
                $http.get(apiUrl + 'events/?format=json').success(function(data) {
                    deferred.resolve(data);
                }).error(function() {
                    deferred.reject();
                });
                return deferred.promise;
            }]
        }
    }).when('/about', {
        templateUrl: partialUrl + 'about.html',
        activeTab: 'about'
    }).otherwise({
        redirectTo: '/'
    });

    // default values that we want
    $provide.constant('baseUrl', baseUrl);

}]);
app.run(['$rootScope', '$route', function ($rootScope, $route) {
    // bind route to rootscope for matching active tab
    $rootScope.$route = $route;

    // make loading information visible on scope
    $rootScope.isRouteLoading = false;
    
    $rootScope.$on('$routeChangeStart', function () {
        $rootScope.isRouteLoading = true;
    });
    
    $rootScope.$on('$routeChangeError', function () {
        $rootScope.isRouteLoading = false;
    });

    $rootScope.$on('$routeChangeSuccess', function () {
        $rootScope.isRouteLoading = false;
    });
}]);
var eventController = app.controller('EventController', ['$scope', 'events', function ($scope, events) {
    $scope.events = events;
}]);
})(window, jQuery, angular);