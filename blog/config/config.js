angular.module('myBlog', ['LocalStorageModule', 'tmh.dynamicLocale', 'pascalprecht.translate','ui.materialize',
    //'ui.bootstrap', // for modal dialogs
    'ngResource', 'ui.router', 'ngCookies', 'ngCacheBuster', 'ngFileUpload', 'infinite-scroll' ])

.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, $translateProvider, tmhDynamicLocaleProvider, httpRequestInterceptorCacheBusterProvider) {

    //Cache everything except rest api requests
    httpRequestInterceptorCacheBusterProvider.setMatchlist([/.*api.*/, /.*protected.*/], true);
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('site', {
            'abstract': true,
            views: {
                'navbar@': {
                    template: '<h1>this is navbar</h1>',
                    controller: ''
                },
                'sidebar@': {
                    template: '<h1>this is sidebar</h1>',
                    controller: ''
                },
                'content@': {
                    template: '<h1>this is main content</h1>',
                    controller: ''
                },
                'footer@': {
                    template: '<h1>this is footer</h1>',
                    controller: ''
                }
            }
        });
});