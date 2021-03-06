var vendorPath = '/scripts/vendor/';
require.config({
    baseUrl: '/scripts/',
    waitSeconds: 10000,
    paths: {
        'app': 'app',
        'angular': vendorPath + 'angular/angular',
        'angularUiRouter': vendorPath + 'angular-ui-router/angular-ui-router',
        'jquery': vendorPath + 'jquery-3.2.1/jquery',
        'routes': '/scripts/route/router',
        'bootstrap': './bootstrap'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angularUiRouter': {
            deps: ['angular'],
            exports: 'angularUiRouter'
        }
    }
});

require([
            'bootstrap'
        ], function(bootstrap) {
            console.log('config.js');
        });