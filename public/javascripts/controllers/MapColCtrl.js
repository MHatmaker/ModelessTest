/*global define */

(function () {
    "use strict";

    console.log('MapColCtrl setup');
    define([
        'angular'
    ], function (angular) {
        console.log('MapColCtrl define');

        function MapColCtrl($scope) {
            console.log("in MapColCtrl");

            $scope.data = {
                expanded : false
            };

            $scope.onExpandClicked = function () {
                $scope.$parent.onExpandClicked();
            };

            $scope.toggleView = function () {
                $scope.$parent.toggleView();
            };
        }

        function init(App) {
            console.log('MapColCtrl init');
            console.debug(App);
            var ctrl = App.controller('MapColCtrl',  ['$scope', MapColCtrl]);
            console.debug(ctrl);

            return MapColCtrl;
        }

        return { start: init};
    });

}());
