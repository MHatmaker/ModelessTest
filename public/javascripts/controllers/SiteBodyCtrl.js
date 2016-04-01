/*global define */

(function () {
    "use strict";

    console.log('SiteBodyCtrl setup');
    define([
        'angular'
    ], function (angular) {
        console.log('SiteBodyCtrl define');

        function SiteBodyCtrl($scope) {
            console.log("in SiteBodyCtrl");

            $scope.data = {
                expanded : false
            };

            $scope.leftColShowing = 'block';
            $scope.rightColShowing = 'block';

            $scope.onExpandClicked = function () {
                if ($scope.data.expanded === true) {
                    $scope.data.expanded = false;
                    $scope.leftColShowing = 'none';
                    $scope.rightColShowing = 'none';
                } else {
                    $scope.data.expanded = true;
                    $scope.leftColShowing = 'block';
                    $scope.rightColShowing = 'block';
                }
            };

        }

        function init(App) {
            console.log('SiteBodyCtrl init');
            console.debug(App);
            var ctrl = App.controller('SiteBodyCtrl',  ['$scope', SiteBodyCtrl]);
            console.debug(ctrl);

            return SiteBodyCtrl;
        }

        return { start: init};
    });

}());
