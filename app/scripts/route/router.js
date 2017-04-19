define(['angular', 'require', 'angularUiRouter'], function(angular, require, angularUiRouter) {
    console.log('router-----.js');
    var app = angular.module('webapp', ['ui.router']);
    
    app.config(['$stateProvider', '$urlRouterProvider', '$controllerProvider', 
        function($stateProvider, $urlRouterProvider, $controllerProvider) {
            console.log('router.js');
            $urlRouterProvider.otherwise('/module1');
            $stateProvider
                .state('module1', {
                    url: '/module1',
                    templateUrl: 'particles/module1.html',
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
        }
    ]);
    
    return app;
});