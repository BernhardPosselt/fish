app.run(['$rootScope', '$route', function ($rootScope, $route) {
    // bind route to rootscope for matching active tab
    $rootScope.$route = $route;

    // make loading information visible on scope
    $rootScope.isRouteLoading = false;
    
    $rootScope.$on('$routeChangeStart', function () {
        $rootScope.isRouteLoading = true;
    });
    
    $rootScope.$on('$routeChangeError', function () {
        $rootScope.isRouteLoading = false;
    });

    $rootScope.$on('$routeChangeSuccess', function () {
        $rootScope.isRouteLoading = false;
    });
}]);