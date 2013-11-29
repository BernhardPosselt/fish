var eventController = app.controller('EventController', ['$scope', 'events', function ($scope, events) {
    $scope.events = events;
}]);