define([
    './controllers'
], function(mod) {
    console.log('testController');
    var controllerFn = function($scope, $location) {
        $scope.app = 'hello, world';
    };
    controllerFn.$inject = ['$scope', '$location'];
    mod.controller('testController', controllerFn);
});