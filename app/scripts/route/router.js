define(['angular', 'require', 'angularUiRouter', '../directive/footer_directive', '../controller/footer_controller', '../controller/leftController', /* '../controller/headerController'*/], function(angular, require, angularUiRouter, footerDirective, footerController) {
    console.log('router-----.js');
    var app = angular.module('webapp', ['ui.router']);
    
    app.factory('myFactory', ['$rootScope', function($rootScope) {
        var myFactory = {};
        myFactory.searchValue = '';
        
        myFactory.updateSearchValue = function(value) {
            $rootScope.$broadcast('searchValueUpdate');
        }
        return myFactory;
    }]);
    
    app.directive('footer', footerDirective);
    /*
    app.directive('footer', function() {
      return {
        restrict: 'A',
        templateUrl: '/partials/footer.html',
        controller: 'footerController',
        replace: true
      };
    }); */

    app.controller('footerController', footerController);
    
    //use scope
    /*
    app.controller('leftController', function($scope) {
        $scope.list = [
           {name:'module1'},
           {name:'module2'}
        ];
        $scope.selected = 'module1';
        $scope.changeModule = function(module) {
            $scope.selected = module;
        }
    });
    */
    app.controller('headerController', function($scope, myFactory) {
        $scope.searchValue = "";
        $scope.search = function(evt) {
            if(!$scope.searchValue) {
                return;
            }
            var keycode = window.event ? evt.keyCode : evt.which;
            if(keycode == 13) {
                myFactory.searchValue = $scope.searchValue;
                myFactory.updateSearchValue();
            }
        }
    });
    
    //use prototype
    app.controller('leftController', LeftController);
    //app.controller('headerController', HeaderController);
    
    app.config(['$stateProvider', '$urlRouterProvider', '$controllerProvider', 
        function($stateProvider, $urlRouterProvider, $controllerProvider) {
            console.log('router.js');
            $urlRouterProvider.otherwise('/module1');
            $stateProvider
                .state('module1', {
                    url: '/module1',
                    templateUrl: '/partials/module1.html',
                    controller: 'module1Controller',
                    resolve: {
                        keyName: function ($q) {
                            var deferred = $q.defer();
                            require(['/scripts/controller/module1Controller.js'], function(controller) {
                                $controllerProvider.register('module1Controller', controller);
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }
                    }
                })
                .state('module2', {
                    url: '/module2',
                    templateUrl: '/partials/module2.html',
                    controller: 'module2Controller',
                    resolve: {
                        keyName: function ($q) {
                            var deferred = $q.defer();
                            require(['/scripts/controller/module2Controller.js'], function(controller) {
                                $controllerProvider.register('module2Controller', controller);
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }
                    }
                })

        }
    ]);
    
    return app;
});