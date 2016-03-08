define([
    'angular'
], function (angular) {
    return angular.module('webApp', ['angular-loading-bar', 'ngAnimate',
            'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch',
            'ui.router', 'ui.bootstrap'])
        .config(function ($locationProvider, $httpProvider) {
            $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

            //location friendly
            //$locationProvider.html5Mode(true);

            // Override $http service's default transformRequest
            $httpProvider.defaults.transformRequest = [function (data) {

                var param = function (obj) {
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
            }];
        });
});