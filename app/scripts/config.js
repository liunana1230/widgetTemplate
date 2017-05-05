var vendorPath = '/widgetTemplate/scripts/vendor/';
require.config({
    baseUrl: '/widgetTemplate/scripts/',
    paths: {
        'app': 'app',
        'angular': vendorPath + 'angular/angular',
        'angularUiRouter': vendorPath + 'angular-ui-router/angular-ui-router',
        'jquery': vendorPath + 'jquery-3.2.1/jquery',
        'routes': '/widgetTemplate/scripts/route/router',
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