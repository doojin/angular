var app = angular.module('inheritance', []);

app.controller('ParentController', function($scope) {
    $scope.person = {
        name: 'Dmitry Papka',
        age: 12,
        greeted: false
    };
});

app.controller('ChildController', function($scope) {
    $scope.person.age = 24;
    $scope.person.birthDate = '21.03.1991';

    $scope.sayHello = function() {
        $scope.person.greeted = true;
    }
});