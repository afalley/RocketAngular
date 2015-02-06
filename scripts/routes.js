'use strict';
angular.module('myApp')
  // Let's configure our app with a router.
  .config(function ($routeProvider) { // Inject the route provider module
    // Our first route.  Found at /#/demo
      $routeProvider.when('/demo', {
      // This route should use the following HTML for its template view.
     templateUrl: 'templates/demoRoute.html',
      // This route should use the following controller for it's view.
     controller: 'RocketController'
    });
    // Our second route, which specifies a parameter.  Found at /#/demo/[Animal]
    
  });