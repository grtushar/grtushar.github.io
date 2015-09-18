angular.module('myBlog', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('site', {
            'abstract': true,
            views: {
                'navbar@': {
                    template: '<h1>this is navbar</h1>'
                },
                'sidebar@': {
                    template: '<h1>this is sidebar</h1>'
                },
                'content@': {
                    template: '<h1>this is main content</h1>'
                },
                'footer@': {
                    template: '<h1>this is footer</h1>'
                }
            }
        });
});