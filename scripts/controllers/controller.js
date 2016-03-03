'use strict';

var appController = angular.module('appController',
        [
            'indexController',
        ]);

appController.controller('notFoundCtrl', [
    '$scope',
    '$rootScope',
    '$state',
    '$stateParams',
    '$common',
    'teacherService',
    function ($scope, $rootScope, $state, $stateParams, $common, teacherService) {
        $scope.formData = {};

    }]);

appController.controller('ModalInfoInstanceCtrl', ['$scope', '$uibModalInstance', 'type', 'message',
    function ($scope, $uibModalInstance, type, message) {

        $scope.type = type;
        $scope.message = message;

        $scope.ok = function () {
            $uibModalInstance.close($scope.selected);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    }]);
