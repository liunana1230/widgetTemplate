function LeftController() {
    this.list = [
       {name:'module1'},
       {name:'module2'}
    ];
    this.selected = 'module1';
}

LeftController.prototype = {
    changeModule: function(module) {
        this.selected = module;
    }
};

/*
define(['angular'], function(angular) {
    angular.module('webapp').controller('leftController', function($scope) {
        $scope.list = [
           {name:'module1'},
           {name:'module2'}
        ];
    });
});
*/