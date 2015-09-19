angular.module('myBlog')
    .controller('mainController', function ($scope, $state) {
        $scope.str = "hello world";

        $scope.go = function() {
            $state.go('sam');
        }
    });