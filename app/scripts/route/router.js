define(['angular', 'require', 'angular-route'], function(angular, require) {
    console.log('router.js');
    var app = angular.module('webapp', [
        'ngRoute'
    ]);
    
    app.config(['$routeProvider', '$controllerProvider', 
        function($routeProvider, $controllerProvider) {
            $routeProvider.
                when('/moudle1', {
                    templateUrl: ''
                })
        }
    ]);
    
    return app;
});