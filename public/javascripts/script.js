
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
            'controllers/MapViewCtrl',
            'controllers/RightColCtrl',
            'controllers/SummaryCtrl',
            'controllers/BSColDlgCtrl',
            'controllers/PluginCtrl'
        ], function (TopRowCtrl, Row2Ctrl, SiteBodyCtrl, LeftColCtrl,
            MapColCtrl, MapViewCtrl, RightColCtrl, SummaryCtrl, BSColDlgCtrl, PluginCtrl) {
            require(['javascripts/domReady!'], function (doc) {
                //This function is called once the DOM is ready,
                //notice the value for 'domReady!' is the current
                //document.
                var App = angular.module("app", ['ngRoute', 'ui.bootstrap', 'ui.router'])
                // var App = angular.module("app", ['ui.bootstrap']);

                .config(['$routeProvider', '$locationProvider', '$urlRouterProvider', '$stateProvider',
                        function ($routeProvider, $locationProvider, $urlRouterProvider, $stateProvider) {
                        console.debug('App module route provider');

                        $routeProvider.
                            when('/views/partials/:id',  {
                                templateUrl: function (params) {
                                    console.log("when string is " + '/views/partials/:id');
                                    console.log(" params.id : " +  params.id);
                                    console.log("prepare to return " + '/partials/' + params.id);
                                    return '/partials/' + params.id;
                                },
                                controller: App.MapCtrl,
                                reloadOnSearch: true,
                                disableCache: true
                            }).
                            when('/templates/:id',  {
                                templateUrl: function (params) {
                                    console.log("when string is " + '/templates/:id');
                                    console.log(" params.id : " +  params.id);
                                    console.log("prepare to return " + '/templates/' + params.id);
                                    return '/templates/' + params.id;
                                },
                                controller: App.BSColDlgCtrl,
                                reloadOnSearch: true
                            }).
                            otherwise({
                                redirectTo: '/'
                            });

                        $locationProvider.html5Mode(true);
                        console.debug('Here we are at the end of routeProvider logic');

                    }
                ]);
                TopRowCtrl.start(App);
                Row2Ctrl.start(App);
                SiteBodyCtrl.start(App);
                LeftColCtrl.start(App);
                MapColCtrl.start(App);
                MapViewCtrl.start(App);
                RightColCtrl.start(App);
                SummaryCtrl.start(App);
                BSColDlgCtrl.start(App);
                PluginCtrl.start(App);

                angular.bootstrap(document.body, ['app']);
            });
            return;
        });
    });
}());
