
/*global define */
/*global require */
/*global async */

// http://angularscript.com/pure-angular-modal-modeless-dialog-directive-ngpopup/

// home for ng-popup directive

// https://github.com/MarkoCen/ngPopup

// hiding columns solution

// http://stackoverflow.com/questions/30334213/bootstrap-4-columns-2-hidden
(function () {
    "use strict";
    var locationPath = "/";
    define('angular', function () {
        if (angular) {
            return angular;
        }
        return {};
    });

    console.log('Script setup');
    define(['angular'], function (angular) {
        console.log('script startup define');

        require({
            async: true,

            packages: [{
                name: 'controllers',
                location: locationPath + 'javascripts/controllers'
            },
                {
                    name: 'lib',
                    location: locationPath + 'javascripts/lib'
                },
                {
                    name: 'javascripts',
                    location: locationPath + 'javascripts'
                }
                ]
        });
        require([
            'controllers/TopRowCtrl',
            'controllers/Row2Ctrl',
            'controllers/SiteBodyCtrl',
            'controllers/LeftColCtrl',
            'controllers/MapColCtrl',
            'controllers/RightColCtrl',
            'controllers/SummaryCtrl'
        ], function (TopRowCtrl, Row2Ctrl, SiteBodyCtrl, LeftColCtrl, MapColCtrl, RightColCtrl, SummaryCtrl) {
            require(['javascripts/domReady!'], function (doc) {
                //This function is called once the DOM is ready,
                //notice the value for 'domReady!' is the current
                //document.
                var App = angular.module("app", ['ui.bootstrap']);
                TopRowCtrl.start(App);
                Row2Ctrl.start(App);
                SiteBodyCtrl.start(App);
                LeftColCtrl.start(App);
                MapColCtrl.start(App);
                RightColCtrl.start(App);
                SummaryCtrl.start(App);

                angular.bootstrap(document.body, ['app']);
            });
            return;
        });
    });
}());
