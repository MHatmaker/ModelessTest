/*global define */

(function () {
    "use strict";

    console.log('SummaryCtrl setup');
    define([
        'angular'
    ], function (angular) {
        console.log('SummaryCtrl define');

        function SummaryCtrl($scope) {
            console.log("in SummaryCtrl");

            $scope.data = {
                expanded : true,
                heading : "Shrink Summary Master Website Options"
            };
            $scope.row2Showing = 'block';

            $scope.onExpandClicked = function () {
                if ($scope.data.expanded === true) {
                    $scope.data.expanded = false;
                    $scope.data.heading = "Show Master Website Options";
                    $scope.row2Showing = 'none';
                } else {
                    $scope.data.expanded = true;
                    $scope.data.heading = "Shrink Master Website Options";
                    $scope.row2Showing = 'block';
                }
            };
        }

        function init(App) {
            console.log('SummaryCtrl init');
            console.debug(App);
            var ctrl = App.controller('SummaryCtrl',  ['$scope', SummaryCtrl]);
            console.debug(ctrl);

            return SummaryCtrl;
        }

        return { start: init};
    });

}());
