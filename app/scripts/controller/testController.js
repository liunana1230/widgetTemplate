define([
    './controllers'
], function(mod) {
    var controllerFn = function($scope, $location) {
        $scope.app = 'hello, world';
    };
    controllerFn.$inject = ['$scope', '$location'];
    mod.controller('testController', controllerFn);
});