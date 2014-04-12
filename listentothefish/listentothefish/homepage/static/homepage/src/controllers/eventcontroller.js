var eventController = app.controller('EventController', 
    ['$scope', '$routeParams', 'events', function ($scope, $routeParams, events) {

    $scope.events = events;

    var id = $routeParams.id || 0;
    $scope.activeEvent = events[id];
    
}]);