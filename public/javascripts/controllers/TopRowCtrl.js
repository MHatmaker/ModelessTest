/*global define */

(function () {
    "use strict";

    console.log('TopRowCtrl setup');
    define([
        'angular'
    ], function (angular) {
        console.log('TopRowCtrl define');

        function TopRowCtrl($scope) {
            console.log("in TopRowCtrl");

            $scope.data = {
                expanded : true
            };
            // $scope.row2Showing = 'inline-block';

            $scope.onExpandClicked = function () {
                $scope.$parent.onExpandClicked();
                // if ($scope.data.expanded === true) {
                //     $scope.data.expanded = false;
                //     $scope.row2Showing = 'none';
                // } else {
                //     $scope.data.expanded = true;
                //     $scope.row2Showing = 'inline-block';
                // }
            };
        }

        function init(App) {
            console.log('TopRowCtrl init');
            console.debug(App);
            var ctrl = App.controller('TopRowCtrl',  ['$scope', TopRowCtrl]);
            console.debug(ctrl);

            return TopRowCtrl;
        }

        return { start: init};
    });

}());
