define([
    'angular',
    './controller/controllers'
], function(angular) {
    //���彫Ҫ�󶨵�document�ϵ�ģ������
    //����ģ����myProject��ʱ��ͬʱָ������������һ��ģ��projectController
    return angular.module('myProject', ['projectController']);
});