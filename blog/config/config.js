angular.module('myBlog', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
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