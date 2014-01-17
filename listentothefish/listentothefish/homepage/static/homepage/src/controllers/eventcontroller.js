var eventController = app.controller('EventController', ['$scope', 'events', function ($scope, events) {
    $scope.events = events;

    if($scope.events.length > 0) {
        $scope.activeEvent = $scope.events[0];
    }

    $scope.setActiveEvent = function (event) {
        $scope.activeEvent = event;
    };
    
}]);