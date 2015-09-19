angular.module('myBlog', ['ui.router'])

    .run(function ($rootScope, $location, $window, $http, $state, $translate) {
        $rootScope.isActive = function(state) {
            return state === $location.path();
        };
    });