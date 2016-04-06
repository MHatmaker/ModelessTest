/*global define */
/*global console */

(function () {
    "use strict";

    console.log('MapColCtrl setup');
    define([
        'angular',
        'controllers/BSColDlgCtrl',
        'controllers/PluginCtrl'
    ], function (angular, BSColDlgCtrl, PluginCtrl) {
        console.log('MapColCtrl define');

        function MapColCtrl($scope, $uibModal) {
            console.log("in MapColCtrl");

            $scope.data = {
                title : "noooo on title",
                guts : "gutless",
                msg : "whatever",
                callback : null,
                nfos : [
                    {
                        fullname : "bill",
                        SSAN : "123-45-6789",
                        filenumber: "1",
                        employer : 'Acme Widgets',
                        DOB : "01/01/1520",
                        address : "123 N. 1st St. Deadwood, SD",
                        custom : "never mind"
                    },
                    {
                        fullname : "bob",
                        SSAN :"987-65-4321",
                        filenumber: "2",
                        employer : 'Acme Gadgets',
                        DOB : "01/01/2220",
                        address : "123 N. 3rd Ave. Mortuary, UT",
                        custom : "whatever"
                    },
                    {
                        fullname : "bill",
                        SSAN : "123-65-4789",
                        filenumber: "3",
                        employer : 'Widgets R Us',
                        DOB : "01/01/1920",
                        address : "123 N. 1st St. Deadwood, SD",
                        custom : "fog"
                    }
                ],
                itm1Collapsed : 'true',
                itm2Collapsed : 'true',
                itm3Collapsed : 'true'
            };
            var grabDataCallback = function () {
                return $scope.data.nfos;
            }
            $scope.data.callback = function () {
                return $scope.data.nfos;
            };

            $scope.onExpandClicked = function () {
                $scope.$parent.onExpandClicked();
            };

            $scope.onShowHideClicked = function () {
                console.debug(evt);
                $scope.itm1Collapsed = !$scope.itm1Collapsed;
            };

            // ng-click="function () {itm{{m.filenumber}}Collapsed = !itm{{m.filenumber}}Collapsed;}",

            $scope.onShowHide1Clicked = function () {
                $scope.itm1Collapsed = !$scope.itm1Collapsed;
            };

            $scope.onShowHide2Clicked = function () {
                $scope.itm2Collapsed = !$scope.itm2Collapsed;
            };

            $scope.onShowHide3Clicked = function () {
                $scope.itm3Collapsed = !$scope.itm3Collapsed;
            };

            $scope.onShowMDialogClicked = function () {
                console.log("onShowMDialogClicked");
                // console.log(tmplt);

                $scope.data.guts = "guts, guts, guts";
                $scope.data.title = "duds";

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

            $scope.onShowPluginClicked = function () {
                console.log("onShowPlugin`Clicked");
                // console.log(tmplt);

                $scope.data.guts = "guts, guts, guts";
                $scope.data.title = "Deadbeats";

                console.debug($scope.data);

                var modalInstance = $uibModal.open({
                    // template : tmplt,
                    templateUrl : '/templates/Plugin',   // .jade will be appended
                    controller : 'PluginCtrl',
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
