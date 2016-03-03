'use strict';

/**
 * @ngdoc overview
 * @name owWebApp
 * @description
 * # owWebApp
 *
 * Main module of the application.
 */
var owWebApp = angular.module('owWebApp', [ 'angular-loading-bar', 'ngAnimate',
		'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch',
		'ui.router', 'ui.bootstrap',

		'appController', 'appService', 'appRoute',
		'appDirective', 'appFilter' ]);

owWebApp
		.config(function($locationProvider, $httpProvider) {
			$httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
			$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

			//location friendly
			//$locationProvider.html5Mode(true);

			// Override $http service's default transformRequest
			$httpProvider.defaults.transformRequest = [ function(data) {

				var param = function(obj) {
					var query = '';
					var name, value, fullSubName, subName, subValue, innerObj, i;

					for (name in obj) {
						value = obj[name];

						if (value instanceof Array) {
							for (i = 0; i < value.length; ++i) {
								subValue = value[i];
								fullSubName = name + '[' + i + ']';
								innerObj = {};
								innerObj[fullSubName] = subValue;
								query += param(innerObj) + '&';
							}
						} else if (value instanceof Object) {
							for (subName in value) {
								subValue = value[subName];
								fullSubName = name + '[' + subName + ']';
								innerObj = {};
								innerObj[fullSubName] = subValue;
								query += param(innerObj) + '&';
							}
						} else if (value !== undefined && value !== null) {
							query += encodeURIComponent(name) + '='
									+ encodeURIComponent(value) + '&';
						}
					}

					return query.length ? query.substr(0, query.length - 1)
							: query;
				};

				return angular.isObject(data)
						&& String(data) !== '[object File]' ? param(data)
						: data;
			} ];
		});

owWebApp.run([
		'$rootScope',
		'$window',
		'$location',
		'$state',
		'$stateParams',
		'$log',
		'$templateCache',
		'$http',
		'$common',
		function($rootScope, $window, $location, $state, $stateParams, $log,
				$templateCache, $http, $common) {

			//视图开始解析
			$rootScope.$on('$stateChangeStart', function(event, toState,
					toParams, fromState, fromParams) {
			});

			//视图解析完成
			$rootScope.$on('$stateChangeSuccess', function(event, toState,
					toParams, fromState, fromParams) {
			});

		} ]);
