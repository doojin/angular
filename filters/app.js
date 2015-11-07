var app = angular.module('filters', []);

app.filter('cap', function() {
  return function(input) {
    if (input) return input[0].toUpperCase() + input.slice(1);
  }
});

app.controller('FiltersController', function($scope) {
  $scope.name = 'Dmitry';
  $scope.number = 12345.6789;
  $scope.balanceAmt = 12345.6789;
  $scope.today = new Date();
  $scope.names = ['Svetlana', 'Dmitry', 'Alexandra', 'Michael', 'Evgeny', 'Arnold', 'Elizabeth'];
  $scope.people = [
    { name: 'Dmitry Papka', age: 24 },
    { name: 'Alexandra Bogdanova', age: 18 },
    { name: 'Elizabeth Ermelnekova', age: 48 },
    { name: 'Evgeny Murdasov', age: 13 },
    { name: 'Arnold Abacassa', age: 25 },
    { name: 'Sergey Davidov', age: 22 }
  ];

  $scope.secondLetter = function(value) {
    return value.name.charCodeAt(1);
  }
});