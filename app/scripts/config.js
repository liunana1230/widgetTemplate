var vendorPath = '/scripts/vendor/';
require.config({
    baseUrl: '/scripts/',
    paths: {
        'app': 'app',
        'angular': vendorPath + 'angular/angular',
        'angularUiRouter': vendorPath + 'angular-ui-router/angular-ui-router',
        'jquery': vendorPath + 'jquery-3.2.1/jquery',
        'routes': '/scripts/route/router'
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
            './bootstrap'
        ], function(bootstrap) {
            //require(['/scripts/directive/footer_directive']);
            console.log('config.js');
        });