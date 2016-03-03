'use strict';

var indexController = angular.module('indexController', []);

indexController.controller('indexCtrl', [
    '$scope',
    '$rootScope',
    '$state',
    '$stateParams',
    '$common',
    'teacherService',
    function ($scope, $rootScope, $state, $stateParams, $common, teacherService) {
        $scope.formData = {};

        //查询频道列表
        teacherService.queryListBy(
                $scope.formData
        ).success(function (data, status, header, config) {
            console.log(data)
            $scope.teacherList = data;

        }).error(function (data, status, header, config) {
            alert("error");
        });

    }]);