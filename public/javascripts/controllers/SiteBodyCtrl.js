/*global define */

(function () {
    "use strict";

    console.log('SiteBodyCtrl setup');
    define([
        'angular'
    ], function (angular) {
        console.log('SiteBodyCtrl define');

        function SiteBodyCtrl($scope) {
            console.log("in SiteBodyCtrl");
            var sbc = document.getElementById('idSiteBodyCtrl'),
                sbcwidth = sbc.offsetWidth - 20,
                sbcheight = sbc.offsetHeight - 20,
                mapview = document.getElementById('MapViewCtrlId'),
                mpvtop = mapview.offsetTop + 10,
                mpvleft = mapview.offsetLeft + 10;

            $scope.data = {
                expanded : false,
                shrinkgrowtext : "Expand Map"
            };

            $scope.leftColShowing = 'block';
            $scope.rightColShowing = 'block';
            $scope.mapColDef = "col-xs-10 col-sm-6 col-md-4";

            $scope.onExpandClicked = function () {
                if ($scope.data.expanded === true) {
                    $scope.data.expanded = false;
                    $scope.leftColShowing = 'block';
                    $scope.rightColShowing = 'block';
                    $scope.mapColDef = "col-xs-12 col-sm-6 col-md-4";
                    $scope.data.shrinkgrowtext = "Expand Map";

                } else {
                    $scope.data.expanded = true;
                    $scope.leftColShowing = 'none';
                    $scope.rightColShowing = 'none';
                    $scope.mapColDef = "col-xs-12";
                    $scope.data.shrinkgrowtext = "Shrink Map";
                }
            };

        }

        function init(App) {
            console.log('SiteBodyCtrl init');
            console.debug(App);
            var ctrl = App.controller('SiteBodyCtrl',  ['$scope', SiteBodyCtrl]);
            console.debug(ctrl);

            return SiteBodyCtrl;
        }

        return { start: init};
    });

}());
