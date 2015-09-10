var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

	// move to navigation for now
	$routeProvider
		.when('/', {
		templateUrl: 'views/about.html',
		controller: 'aboutCtrl'
		})
	.when('/about', {
		templateUrl: 'views/about.html',
		controller: 'aboutCtrl'
		})
	.when('/projects', {
		templateUrl: 'views/projects.html',
		controller: 'projectCtrl'
	})
	.when('/connect', {
		templateUrl: 'views/connect.html',
		controller: 'connectCtrl'
	})		
	.otherwise({ redirectTo: '/' });	
}]);