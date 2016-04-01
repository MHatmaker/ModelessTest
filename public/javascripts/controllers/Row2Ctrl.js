/*global define */

(function () {
    "use strict";

    console.log('Row2Ctrl setup');
    define([
        'angular'
    ], function (angular) {
        console.log('Row2Ctrl define');

        function Row2Ctrl($scope) {
            console.log("in Row2Ctrl");

            $scope.data = {
                expanded : true
            };
            $scope.row2Showing = 'inline-block';

            // $scope.onExpandClicked = function () {
            //     if ($scope.data.expanded === true) {
            //         $scope.data.expanded = false;
            //         $scope.row2Showing = 'none';
            //     } else {
            //         $scope.data.expanded = true;
            //         $scope.row2Showing = 'inline-block';
            //     }
            // };
        }

        function init(App) {
            console.log('Row2Ctrl init');
            console.debug(App);
            var ctrl = App.controller('Row2Ctrl',  ['$scope', Row2Ctrl]);
            console.debug(ctrl);

            return Row2Ctrl;
        }

        return { start: init};
    });

}());
