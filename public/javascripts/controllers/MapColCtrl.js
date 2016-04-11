/*global define */
/*global console */

(function () {
    "use strict";

    console.log('MapColCtrl setup');
    define([
        'angular',
        'controllers/BSColDlgCtrl',
        'controllers/PluginCtrl',
        'controllers/MapLinkrPluginCtrl'
    ], function (angular, BSColDlgCtrl, PluginCtrl, MapLinkrPluginCtrl) {
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
                        filenumber: 0,
                        employer : 'Acme Widgets',
                        DOB : "01/01/1520",
                        address : "123 N. 1st St. Deadwood, SD",
                        custom : "never mind"
                    },
                    {
                        fullname : "bob",
                        SSAN : "987-65-4321",
                        filenumber: 1,
                        employer : 'Acme Gadgets',
                        DOB : "01/01/2220",
                        address : "123 N. 3rd Ave. Mortuary, UT",
                        custom : "whatever"
                    },
                    {
                        fullname : "bill",
                        SSAN : "123-65-4789",
                        filenumber: 2,
                        employer : 'Widgets R Us',
                        DOB : "01/01/1920",
                        address : "123 N. 1st St. Deadwood, SD",
                        custom : "fog"
                    }
                ],

                itmCollapsed : [true, true, true]
            };

            // var grabDataCallback = function () {
            //     return $scope.data.nfos;
            // };

            $scope.data.callback = function () {
                return $scope.data.nfos;
            };

            $scope.onExpandClicked = function () {
                $scope.$parent.onExpandClicked();
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

            $scope.mldata = {
                'news' : {
                    'isCollapsed' : true,
                    'subtext' : ""
                },
                'using' : {
                    'isCollapsed' : true,
                    'subtext' : {
                        'sameWindow' : {
                            'isCollapsed' : true,
                            'text' : 'The newly selected map replaces the current map in the map viewer to the left.'
                        },

                        'newTab' : {
                            'isCollapsed' : true,
                            'text' : 'The newly selected map opens in a new tab in the current browser. \
                                   Switch to the tab and drag the tab to the desktop, which displays \
                                    the tab\'s contents in a completely new browser instance. \
                                      This is a fully functional web browser.'
                        },

                        'newWindow' : {
                            'isCollapsed' : true,
                            'text' : 'The newly selected map is opened in a map viewer in a \
                                new popup  window.  Although this is not a full-featured new \
                                web browser instance, it provides complete functionality as \
                                 a synchronized map viewer.  If  popups are turned off, \
                                 use sequence described under the \'New Tab\' option above.'
                        }
                    }
                },
                'callback' : null
            };
/*
                itmCollapsed = [
                    {
                        'itm' : 'news',
                        'collapsed' : true
                    }
                    {
                        'itm' : 'using',
                        'collapsed' : true
                    }
                ]
            }
*/
            $scope.onMapLinkrClicked = function () {
                console.log("onMapLinkrClicked");

                console.debug($scope.mldata);

                var modalInstance = $uibModal.open({
                    // template : tmplt,
                    templateUrl : '/templates/MapLinkrPlugin',   // .jade will be appended
                    controller : 'MapLinkrPluginCtrl',
                    backdrop : 'false',

                    resolve : {
                        data: function () {
                            return $scope.mldata;
                        }
                    }
                });

                modalInstance.result.then(function (msg) {
                    console.log("return from showing MapLinkr`dialog");
                    console.log(msg);
                }, function () {
                    console.log('MapLinkr Modal dismissed at: ' + new Date());
                });
            };

            $scope.mldata.callback = function () {
                return $scope.mldata;
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
