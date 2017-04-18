var vendorPath = '/scripts/vendor/';
require.config({
    baseUrl: '../scripts/',
    paths: {
        'app': 'app',
        'angular': vendorPath + 'angular/angular',
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