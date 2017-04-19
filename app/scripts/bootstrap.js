define([
    'angular',
    'app',
    'jquery',
    './controller/testController'
], function(angular) {
    console.log('bootstrap.js');
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['webapp']);
        console.log('webapp');
    });
});