var app = angular.module('parsing', []);

app.controller('ParseController', function($scope, $parse) {
    $scope.$watch('expression', function(newValue, oldValue, scope) {
        try {
            $scope.parsedExpression = $parse(newValue)(scope);
        } catch (e) {
            // Do nothing
        }
    });
});