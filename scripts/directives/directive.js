'use strict';

var appDirective = angular.module('appDirective',[]);

//渲染后处理1
appDirective.directive("handleHtmlPart", ["$timeout", function (timer) {
    return {
        restrict: "A",
        link: function ($scope, elem, attr) {
            timer(function () {
                //alert($(elem.context).text());
                $scope.$watch(function () {

                    elem.find('img').parent().css({'margin': '0rem'});
                    elem.find('p').each(function () {
                        if ($(this).text() != null && $(this).text().trim().length == 4) {
                            $(this).css({'font-size': '1.6rem', 'color': '#333333'});
                        }
                    });

                });
            }, 0);
        }
    };
}]);

//渲染后处理2
appDirective.directive("handleImg", ["$timeout", function (timer) {
    return {
        restrict: "A",
        link: function ($scope, elem, attr) {
            timer(function () {
                //alert($(elem.context).text());
                $scope.$watch(function () {

                    elem.find('img:eq(0)').parent().css({'margin': '0rem'});
                    elem.find('img:eq(3)').parent().css({'margin': '0rem'});


                });
            }, 0);
        }
    };
}]);

appDirective.directive("sideNavLeft", ["$timeout", function (timer) {
    return {
        restrict: "EA",
        controller: ["$scope", "$rootScope", function ($scope, $rootScope) {

        }],
        templateUrl: 'webSiteApp/modules/common/views/sideNavLeft.html',
        link: function ($scope, elem, attr) {
            timer(function () {
                $scope.$watch(function () {
                    //do something
                });
            }, 0);
        }
    };
}]);