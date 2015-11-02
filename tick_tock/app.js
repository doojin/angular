var tickTockModule = angular.module('tickTock', []);

tickTockModule.controller('ClockController', function($scope, $timeout) {
    $scope.clock = {};

    function getCurrentTime() {
        var date = new Date();

        var secs = date.getSeconds();
        secs = secs < 10 ? '0' + secs : secs;

        var mins = date.getMinutes();
        mins = mins < 10 ? '0' + mins : mins;

        var hrs = date.getHours();
        hrs = hrs < 10 ? '0' + hrs : hrs;
        return hrs + ':' + mins + ':' + secs;
    }

    function updateTime() {
        $scope.clock.time = getCurrentTime();
        $timeout(updateTime, 1000);
    }

    updateTime();
});