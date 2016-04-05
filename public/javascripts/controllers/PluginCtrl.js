/*global define */

(function () {
    "use strict";

    console.log('PluginCtrl setup');
    var areWeInitialized = false;
    define([
        'angular'
    ], function (angular) {
        console.log('PluginCtrl define');

        areWeInitialized = false;

        function PluginCtrl($scope, $uibModalInstance, data) {
            console.log("in PluginCtrl");
            areWeInitialized = false;

            $scope.data = {
                guts : data.guts || "no guts",
                title : data.title || "no title",
                icon : data.icon,
                snippet : data.snippet || "snippet stuff"
            };

            $scope.accept = function () {
                console.log("on Accept " + $scope.data.snippet);
                $uibModalInstance.close($scope.data.snippet);
            };

            $scope.cancel = function () {
                console.log("on Cancel");
                $uibModalInstance.dismiss('cancel');
            };

            $scope.hitEnter = function (evt) {
                if (angular.equals(evt.keyCode, 13) && !(angular.equals($scope.name, null) || angular.equals($scope.name, ''))) {
                    $scope.save();
                }
            }; // end hitEnter
        }

        PluginCtrl.prototype.isInitialized = function () {
            return areWeInitialized;
        };

        PluginCtrl.prototype.showDialog = function (data) {
            $scope.data.guts = data.guts || "still no guts";
            $scope.data.title = data.title || "still no title";
        };

        function init(App) {
            console.log('PluginCtrl init');

            areWeInitialized = true;
            App.controller('PluginCtrl',  ['$scope', '$uibModalInstance', 'data', PluginCtrl]);

            return PluginCtrl;
        }

        return {
            start: init,
            isInitialized : PluginCtrl.prototype.isInitialized,
            showDialog : PluginCtrl.showDialog
        };
    });

}());
