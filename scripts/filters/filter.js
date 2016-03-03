'use strict';

var appFilter = angular.module('appFilter', []);

appFilter
        .filter('split', function () {
            return function (str, splitChar, splitIndex) {
                // do some bounds checking here to ensure it has that index
                if (str != null) {
                    return str.split(splitChar)[splitIndex];
                } else {
                    return str;
                }
                ;

            };
        });

appFilter
        .filter('subTo', function () {
            return function (str, subLen, suffix) {
                // do some bounds checking here to ensure it has that index
                if (str.length <= subLen) {
                    return str;
                } else {
                    return str.substring(0, subLen) + suffix;
                }
                ;

            };
        });