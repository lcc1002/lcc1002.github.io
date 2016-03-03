'use strict';

var indexRoute = angular.module('indexRoute', []);

indexRoute.config(
        function ($stateProvider, $urlRouterProvider, $routeProvider, $locationProvider) {
            $stateProvider
                    .state('index', {
                        url: '/index.htm',
                        templateUrl: 'webSiteApp/modules/index/views/index.html',
                        controller: 'indexCtrl',
                    })
                    .state('index-blog', {
                        url: '/index/blog.htm',
                        templateUrl: 'webSiteApp/modules/index/views/blog.html',
                        controller: 'indexCtrl',
                    })
                    .state('index-project', {
                        url: '/index/project.htm',
                        templateUrl: 'webSiteApp/modules/index/views/project.html',
                        controller: 'indexCtrl',
                    })
                    .state('index-resume', {
                        url: '/index/resume.htm',
                        templateUrl: 'webSiteApp/modules/index/views/resume.html',
                        controller: 'indexCtrl',
                    });
        });
