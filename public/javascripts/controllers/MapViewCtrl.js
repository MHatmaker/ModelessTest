/*global define */

(function () {
    "use strict";

    console.log('MapViewCtrl setup');
    define([
        'angular'
    ], function (angular) {
        console.log('MapViewCtrl define');

        function MapViewCtrl($scope) {
            console.log("in MapViewCtrl");
        }

        function init(App) {
            console.log('MapViewCtrl init');
            console.debug(App);
            var ctrl = App.controller('MapViewCtrl',  ['$scope', MapViewCtrl]);
            console.debug(ctrl);

            return MapViewCtrl;
        }

        return { start: init};
    });

}());
