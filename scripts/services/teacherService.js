'use strict';

var teacherService = angular.module('teacherService', []);

teacherService.factory('teacherService', function($http, $common) {

    var service = {

        queryListBy : function(params) {
            var url = $common.getBaseParams().url + 'datas/teacher/list.json';
            return $http.post(url, params);
        },

        queryDetailBy : function(params) {
            var url = $common.getBaseParams().url + 'datas/teacher/detail';
            return $http.post(url, params);
        }

    };
    return service;

});