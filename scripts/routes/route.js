'use strict';

var appRoute = angular.module('appRoute',
        [
            'indexRoute',
        ]);

appRoute.config(
        function ($stateProvider, $urlRouterProvider, $routeProvider, $locationProvider) {
            $stateProvider
                    .state('app', {
                        url: '/',
                        templateUrl: 'webSiteApp/modules/index/views/index.html',
                        controller: 'indexCtrl',
                    })
                    .state('not-found', {
                        url: '/not-found.htm',
                        templateUrl: 'webSiteApp/404.html',
                        controller: 'notFoundCtrl',
                    });
            $urlRouterProvider
                    .otherwise("/not-found.htm");
        });
