/*
Core JS file of the web front-end. Defines routes and controllers
*/

var nameOfAppModule = angular.module('nameOfAppModule', ['ngRoute']);

//remove the #! from the URL routes 
nameOfAppModule.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

// ROUTES
nameOfAppModule.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })

});

// CONTROLLERS
nameOfAppModule.controller('homeController', function($scope, $http ){

	$http.get('/api/elements')
		.then(function(response) {
            console.log(response.data.data)
			$scope.elements = elements.data.data;
		});

});