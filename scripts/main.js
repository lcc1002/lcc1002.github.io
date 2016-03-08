'use strict';

/**
 * @ngdoc overview
 * @name webApp
 * @description
 * # webApp
 *
 * Main module of the application.
 */
require.config({
    //一些库文件的配置
    paths: {
        'jquery': 'lib/jquery/jquery.min',
        'domReady': 'lib/domready/domReady',
        'angular': 'lib/angular/angular.min',
        'angular-animate': 'lib/angular-animate/angular-animate.min',
        'angular-bootstrap': 'lib/angular-bootstrap/ui-bootstrap.min',
        'angular-cookies': 'lib/angular-cookies/angular-cookies.min',
        'angular-loading-bar': 'lib/angular-loading-bar/loading-bar.min',
        'angular-resource': 'lib/angular-resource/angular-resource.min',
        'angular-route': 'lib/angular-route/angular-route.min',
        'angular-sanitize': 'lib/angular-sanitize/angular-sanitize.min',
        'angular-touch': 'lib/angular-touch/angular-touch.min',
        'angular-ui-router': 'lib/angular-ui-router/angular-ui-router.min',
        'app': "app",
        'router': "routers/router",
        'controller': "controllers/controller"
    },
    //这个配置是你在引入依赖的时候的包名
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-animate': {
            deps: ['angular'],
            exports: 'angular-animate'
        },
        'angular-bootstrap': {
            deps: ['angular'],
            exports: 'angular-bootstrap'
        },
        'angular-cookies': {
            deps: ['angular'],
            exports: 'angular-cookies'
        },
        'angular-loading-bar': {
            deps: ['angular'],
            exports: 'angular-loading-bar'
        },
        'angular-resource': {
            deps: ['angular'],
            exports: 'angular-resource'
        },
        'angular-route': {
            deps: ['angular'],
            exports: 'angular-route'
        },
        'angular-sanitize': {
            deps: ['angular'],
            exports: 'angular-sanitize'
        },
        'angular-touch': {
            deps: ['angular'],
            exports: 'angular-touch'
        },
        'angular-ui-router': {
            deps: ['angular'],
            exports: 'angular-ui-router'
        }
    },
    deps:['bootstrap'],//应用启动文件
    urlArgs: "bust=" + (new Date()).getTime()  //防止读取缓存，调试用
});