// Assign a variable to our angular module. We need to include ngRoute in our dependencies
var navRoutes = angular.module('navRoutes', ['ngRoute', 'ngAnimate']);
// Main application controller
navRoutes.controller('navController', function($scope, $http){
});
// We get the route provider because we included 'ngRoute'
// Attach a config to our module, specifically bring in the $routeProvider
// it watches the url and 'when' there is a match it will set the template url which 
// will go into the ng-view. It will set the controller to that view.
navRoutes.config(function($routeProvider){
	$routeProvider.when('/locations', {
		templateUrl: 'templates/locations.html',
		controller: 'locationsController'
	});
	$routeProvider.when('/about',{
		templateUrl: 'templates/about.html',
		controller: 'aboutController'
	});
	$routeProvider.when('/contact',{
		templateUrl: 'templates/contact.html',
		controller: 'contactController'
	});
	$routeProvider.otherwise('#');
});