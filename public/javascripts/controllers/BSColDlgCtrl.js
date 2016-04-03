/*global define */

(function () {
    "use strict";

    console.log('BSColDlgCtrl setup');
    var areWeInitialized = false;
    define([
        'angular'
    ], function (angular) {
        console.log('BSColDlgCtrl define');

        areWeInitialized = false;

        function BSColDlgCtrl($scope, $uibModalInstance, data) {
            console.log("in BSColDlgCtrl");
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
                $uibModalInstance.dismiss('cancel');
            };

            $scope.hitEnter = function (evt) {
                if (angular.equals(evt.keyCode, 13) && !(angular.equals($scope.name, null) || angular.equals($scope.name, ''))) {
                    $scope.save();
                }
            }; // end hitEnter
        }

        BSColDlgCtrl.prototype.isInitialized = function () {
            return areWeInitialized;
        };

        BSColDlgCtrl.prototype.showDialog = function (data) {
            $scope.data.guts = data.guts || "still no guts";
            $scope.data.title = data.title || "still no title";
        };

        function init(App) {
            console.log('BSColDlgCtrl init');

            areWeInitialized = true;
            App.controller('BSColDlgCtrl',  ['$scope', '$uibModalInstance', 'data', BSColDlgCtrl]);

            return BSColDlgCtrl;
        }

        return {
            start: init,
            isInitialized : BSColDlgCtrl.prototype.isInitialized,
            showDialog : BSColDlgCtrl.showDialog
        };
    });

}());
