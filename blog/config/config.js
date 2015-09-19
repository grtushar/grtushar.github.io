angular.module('myBlog', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('site', {
            'abstract': true,
            views: {
                'navbar@': {
                    templateUrl: 'views/navbar.html'
                },
                'sidebar@': {
                    templateUrl: 'views/sidebar.html'
                },
                'content@': {
                    templateUrl: 'views/home.html'
                },
                'footer@': {
                    templateUrl: 'views/footer.html'
                }
            },

            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('global');
                }]
            }
        })
        .state('sam', {
            parent: 'site',
            url: '/sam',
            views: {
                'content@': {
                    template: '<h1>hello fromm sam</h1>'
                }
            }
        });
});