(function(window, $, angular, undefined) {
var app = angular.module('ListenToTheFish', ['ngAnimate']);
app.config(['$interpolateProvider', function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
}]);
app.controller('EventController', ['$scope', function ($scope) {
    $scope.events = [
        {
            id: 1,
            title: 'welcome',
            date: 8232323,
            place: 'Studentenheim',
            description: 'hier ist eine description',
            longDescription: 'hier hiehriehriehriehriehriehirheihriehi'
        },
        {
            id: 2,
            title: 'test',
            date: 92389283,
            place: 'rudolf',
            description: 'hier ist eine description',
            longDescription: 'hier hiehriehriehriehriehriehirheihriehi'
        }
    ];

}]);
})(window, jQuery, angular);