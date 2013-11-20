(function(window, $, angular, undefined) {
var app = angular.module('ListenToTheFish', []);
app.config(['$interpolateProvider', function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
}]);
})(window, jQuery, angular);