'use strict';

define(["app"],
    function (app) {
        return app.run([
                '$rootScope',
                '$state',
                '$stateParams',
                function ($rootScope, $state, $stateParams) {
                    $rootScope.$state = $state;
                    $rootScope.$stateParams = $stateParams
                }
            ])
            .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $uiViewScrollProvider) {
                $stateProvider
                    .state('app', {
                        url: '/',
                        templateUrl: 'modules/index/views/index.html',
                        controller: 'indexCtrl',
                    })
                    .state('not-found', {
                        url: '/not-found.htm',
                        templateUrl: '404.html',
                        controller: 'notFoundCtrl',
                    });
                $urlRouterProvider
                    .otherwise("/not-found.htm");
            })
    });