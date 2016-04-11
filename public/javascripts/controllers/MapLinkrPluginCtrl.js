/*global define */

(function () {
    "use strict";

    console.log('MapLinkrPluginCtrl setup');
    var areWeInitialized = false,
        self = null;
    define([
        'angular'
    ], function (angular) {
        console.log('MapLinkrPluginCtrl define');
        var selfMethods = {};

        areWeInitialized = false;

        function MapLinkrPluginCtrl($scope, $uibModalInstance, data) {
            console.log("in MapLinkrPluginCtrl");
            areWeInitialized = false;
            self = this;

            $scope.mldata = {};

            $scope.mldata = data.callback();

            $scope.onShowHideMapLinkrClicked = function (clickedItem) {
                var collapseTest = $scope.mldata[clickedItem],
                    itm = '';
                if (collapseTest === true) {
                    for (itm in $scope.mldata) {
                        if (itm !== clickedItem && $scope.mldata[itm] === false) {
                            $scope.mldata[itm] = true;
                        }
                    }
                 }
                $scope.mldata[clickedItem] = !$scope.mldata[clickedItem];
            };

            $scope.accept = function () {
                console.log("on Accept " + $scope.mldata.snippet);
                $uibModalInstance.close($scope.mldata.snippet);
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
            return selfMethods;
        }

        MapLinkrPluginCtrl.prototype.isInitialized = function () {
            return areWeInitialized;
        };

        MapLinkrPluginCtrl.prototype.showDialog = function (data) {
        };

        function init(App) {
            console.log('MapLinkrPluginCtrl init');

            areWeInitialized = true;
            var mthds = App.controller('MapLinkrPluginCtrl',  ['$scope', '$uibModalInstance', 'data', MapLinkrPluginCtrl]);
            console.log("mthds are here");
            console.debug(mthds);

            return MapLinkrPluginCtrl;
        }

        return {
            start: init,
            isInitialized : MapLinkrPluginCtrl.prototype.isInitialized,
            showDialog : MapLinkrPluginCtrl.prototype.showDialog
        };
    });

}());
