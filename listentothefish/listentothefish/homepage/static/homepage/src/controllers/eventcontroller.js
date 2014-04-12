var eventController = app.controller('EventController', 
    ['$scope', '$routeParams', 'events', function ($scope, $routeParams, events) {

    $scope.events = events;

    var id = parseInt($routeParams.id, 10) || 0;
    angular.forEach(events, function (event) {
        if(id === event.id) {
            $scope.activeEvent = event;
        }
    });
    
}]);