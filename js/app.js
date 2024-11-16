angular.module('personalApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/about', {
                templateUrl: 'partials/about.html'
            })
            .when('/hobbies', {
                templateUrl: 'partials/hobbies.html'
            })
            .when('/family', {
                templateUrl: 'partials/family.html'
            })
            .when('/education', {
                templateUrl: 'partials/education.html'
            })
            .when('/contributions', {
                templateUrl: 'partials/contributions.html'
            })
            .otherwise({
                redirectTo: '/about'
            });
    })
    .run(function ($rootScope, $location) {
        $rootScope.$on('$routeChangeSuccess', function () {
            $rootScope.activeLink = $location.path();
        });

        $rootScope.isActive = function (viewLocation) {
            return viewLocation === $rootScope.activeLink;
        };
    });
