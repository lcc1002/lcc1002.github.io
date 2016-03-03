'use strict';

var appService = angular.module('appService',
        [
            'teacherService',
        ]);

appService.factory('$common', function ($http, $state, $q, $uibModal) {

    var service = { // our factory definition
        getParams: function (params) {
            return params;
        },

        getBaseParams: function () {
            return {
                'url': 'http://localhost:63342/webSiteApp/',
                /*'url' : 'http://www.dfzhgx.com/',*/
                'project': 'owWeb'
            };
        },

        getSyncData: function (url, params) {
            var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行

            $http.post(url, params)
                    .success(function (data, status, headers, config) {
                        deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
                    })
                    .error(function (data, status, headers, config) {
                        deferred.reject(data);   // 声明执行失败，即服务器返回错误
                    });

            return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
        },

        openModel: function (type, message) {
            return function () {
                var modalInstance = $uibModal.open({
                    templateUrl: 'modules/common/views/modal.html',
                    controller: 'ModalInfoInstanceCtrl',
                    resolve: {
                        message: function () {
                            return message;
                        },
                        type: function () {
                            return type;
                        }
                    }
                });
                modalInstance.opened.then(function () {//
                    console.log('modal is opened');
                });
                modalInstance.result.then(function (result) {
                    console.log(result);

                }, function (reason) {
                    console.log(reason);

                });
            };
        },

        openModelAuto: function (type, message, cancelUrl, cancelUrlParams) {
            var modalInstance = $uibModal.open({
                templateUrl: 'modules/common/views/modal.html',
                controller: 'ModalInfoInstanceCtrl',
                resolve: {
                    message: function () {
                        return message;
                    },
                    type: function () {
                        return type;
                    }
                }
            });
            modalInstance.opened.then(function () {//打开
                //console.log('modal is opened');
                setTimeout(function () {
                    modalInstance.close("auto close");
                }, 2000);
            });

            modalInstance.result.then(function (result) {//撤销
                //console.log(result);
                if (cancelUrl != null) {
                    $state.go(cancelUrl, cancelUrlParams, {inherit: false, reload: true});
                }

            }, function (reason) {//关闭
                if (cancelUrl != null) {
                    $state.go(cancelUrl, cancelUrlParams, {inherit: false, reload: true});
                }

            });
        }

    };
    return service;

});
