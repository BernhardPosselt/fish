(function(window, $, angular, undefined) {
var app = angular.module('ListenToTheFish', ['ngAnimate', 'ngRoute']);
app.config(['$interpolateProvider', '$routeProvider', '$provide',
    function($interpolateProvider, $routeProvider, $provide) {

    // use [[ ]] instead of {{ }} because django already uses them
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');

    var baseUrl = '/';
    var apiUrl = baseUrl + 'api/1.0/';
    var partialUrl = baseUrl + 'static/homepage/partials/';

    $routeProvider.when('/events', {
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
            }],
            eventTypes: ['$http', '$q', function($http, $q) {
                var deferred = $q.defer();
                $http.get(apiUrl + 'events/types?format=json').success(function(data) {
                    deferred.resolve(data);
                }).error(function() {
                    deferred.reject();
                });
                return deferred.promise;
            }]
        }
    }).when('/events/:id', {
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
            }],
            eventTypes: ['$http', '$q', function($http, $q) {
                var deferred = $q.defer();
                $http.get(apiUrl + 'events/types?format=json').success(function(data) {
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
        redirectTo: '/events'
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
var eventController = app.controller('EventController', 
    ['$scope', '$routeParams', '$sce', 'events', 'eventTypes',
    function ($scope, $routeParams, $sce, events, eventTypes) {

    $scope.events = events;
    $scope.eventTypes = {};
    angular.forEach(eventTypes, function(eventType) {
        $scope.eventTypes[eventType.id] = eventType;
    });

    var id = parseInt($routeParams.id, 10) || 0;
    angular.forEach(events, function (event) {
        if(id === event.id) {
            event.description = $sce.trustAsHtml(event.description);
            $scope.activeEvent = event;
        }
    });
    
    $scope.getType = function (event) {
        return $scope.eventTypes[event.id];
    };
}]);
})(window, jQuery, angular);