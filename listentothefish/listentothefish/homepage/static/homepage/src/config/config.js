app.config(['$interpolateProvider', '$routeProvider', '$provide',
    function($interpolateProvider, $routeProvider, $provide) {

    // use [[ ]] instead of {{ }} because django already uses them
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');

    var baseUrl = '/';
    var apiUrl = baseUrl + 'api/1.0/';
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