angular.module('myBlog', ['ui.router'])

    .run(function ($rootScope, $location, $window, $http, $state, $translate) {
        $rootScope.isActive = function(state) {
            return state === $location.path();
        };
    })
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
            });
    });
