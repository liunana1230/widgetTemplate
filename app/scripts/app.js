define([
    'angular',
    './controller/controllers'
], function(angular) {
    //定义将要绑定到document上的模块名称
    //定义模块名myProject的时候，同时指定它依赖于另一个模块projectController
    return angular.module('webapp', ['projectController']);
});