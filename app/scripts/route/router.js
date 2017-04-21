define(['angular', 'require', 'angularUiRouter'], function(angular, require, angularUiRouter) {
    console.log('router-----.js');
    var app = angular.module('webapp', ['ui.router']);
    
    app.config(['$stateProvider', '$urlRouterProvider', '$controllerProvider', 
        function($stateProvider, $urlRouterProvider, $controllerProvider) {
            console.log('router.js');
            $urlRouterProvider.otherwise('/module2');
            $stateProvider
                .state('module1', {
                    url: '/module1',
                    templateUrl: 'partials/module1.html',
                    controller: 'module1Controller',
                    resolve: {
                        keyName: function ($q) {
                            var deferred = $q.defer();
                            require(['scripts/controller/module1Controller.js'], function(controller) {
                                $controllerProvider.register('module1Controller', controller);
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }
                    }
                })
                .state('module2', {
                    url: '/module2',
                    templateUrl: 'partials/module2.html',
                    controller: 'module2Controller',
                    resolve: {
                        keyName: function ($q) {
                            var deferred = $q.defer();
                            require(['scripts/controller/module2Controller.js'], function(controller) {
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