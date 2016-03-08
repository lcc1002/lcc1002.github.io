define([//启动依赖文件
    'require',
    'jquery',
    'angular',
    'angular-route',
    'angular-animate',
    'angular-bootstrap',
    'angular-cookies',
    'angular-loading-bar',
    'angular-resource',
    'angular-sanitize',
    'angular-touch',
    'angular-ui-router',
    'app',
    'router'
], function (require, $, angular) {
    'use strict';
    //手动启动应用
    require(['domReady!'], function (document) {
        angular.bootstrap(document, ['webApp']);
    });
});
