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