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

            $scope.data = {
                expanded : false
            };

            $scope.leftColShowing = 'block';
            $scope.rightColShowing = 'block';
            $scope.mapColDef = "col-xs-12 col-sm-6 col-md-4";;

            $scope.onExpandClicked = function () {
                if ($scope.data.expanded === true) {
                    $scope.data.expanded = false;
                    $scope.leftColShowing = 'none';
                    $scope.rightColShowing = 'none';
                    $scope.mapColDef = "col-xs-12";
                } else {
                    $scope.data.expanded = true;
                    $scope.leftColShowing = 'block';
                    $scope.rightColShowing = 'block';
                    $scope.mapColDef = "col-xs-12 col-sm-6 col-md-4";
                }
            };
            $scope.ngPopupOption = {
                modelName: "MapLinkrNgPopup",
                width: 400,
                height: 300,
                hasTitleBar:true,
                template: '<img src="http://www.omgubuntu.co.uk/wp-content/uploads/2014/03/Forever-Shady-S.jpg" style="width:100%;height:100%;">',
                title: "MapLinkr Dialog",
                resizable:true,
                draggable: true,
                position: { top : 25, left : 30},
                onOpen : function(){},
                onClose  : function(){},
                onDragStart : function(){},
                onDragEnd : function(){},
                onResize : function(){}
                // isShow : false
            };

            $scope.toggleView = function () {
                $scope.ngPopupOption.isShow = !$scope.ngPopupOption.isShow;
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
