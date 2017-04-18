define([
    'angular',
    'app',
    'jquery',
    './controller/testController',
    './route/router'
], function(angular) {
    console.log('bootstrap.js');
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['webapp']);
    });
});