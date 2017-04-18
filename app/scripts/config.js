var vendorPath = '/scripts/vendor/';
require.config({
    baseUrl: '/scripts/',
    paths: {
        'app': 'app',
        'angular': vendorPath + 'angular/angular',
        'angular-route': vendorPath + 'angular-route/angular-route',
        'jquery': vendorPath + 'jquery-3.2.1/jquery'
    },
    shim: {
        'angular': {
            exports: 'angular'
        }
    }
});

require([
            './bootstrap'
        ], function(bootstrap) {
            console.log('config.js');
        });