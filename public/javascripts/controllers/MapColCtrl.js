/*global define */

(function () {
    "use strict";

    console.log('MapColCtrl setup');
    define([
        'angular',
        'controllers/BSColDlgCtrl'
    ], function (angular, BSColDlgCtrl) {
        console.log('MapColCtrl define');

        function MapColCtrl($scope, $uibModal) {
            console.log("in MapColCtrl");

            $scope.data = {
                title : "noooo on title",
                guts : "gutless",
                msg: "whatever"
            };

            $scope.onExpandClicked = function () {
                $scope.$parent.onExpandClicked();
            };

            $scope.toggleView = function () {
                $scope.$parent.toggleView();
            };
            $scope.onShowMDialogClicked = function () {
                console.log("onShowMDialogClicked");
                // console.log(tmplt);

                $scope.data.guts = "guts, guts, guts";
                $scope.data.title = "yippee, a title";

                var modalInstance = $uibModal.open({
                    // template : tmplt,
                    templateUrl : '/templates/MDialog',   // .jade will be appended
                    controller : 'BSColDlgCtrl',
                    backdrop : 'false',

                    resolve : {
                        data: function () {
                            return $scope.data;
                        }
                    }
                });

                modalInstance.result.then(function (msg) {
                    console.log("return from showing dialog");
                    console.log(msg);
                }, function () {
                    console.log('Modal dismissed at: ' + new Date());
                });

            };
        }

        function init(App) {
            console.log('MapColCtrl init');
            console.debug(App);
            var ctrl = App.controller('MapColCtrl',  ['$scope', '$uibModal', MapColCtrl]);
            console.debug(ctrl);

            return MapColCtrl;
        }

        return { start: init};
    });

}());
