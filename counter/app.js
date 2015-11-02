var counterModule = angular.module('counter', []);
counterModule.controller('CounterController', function($scope) {
    $scope.counter = {
        value: 0
    };

    $scope.add = function(amt) { $scope.counter.value += amt; };
    $scope.subtract = function(amt) { $scope.counter.value -= amt; };
});