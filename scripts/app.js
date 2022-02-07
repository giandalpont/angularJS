var app = angular.module('marvel', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'MainController', 
      templateUrl: 'views/home.html' 
    })
  	.when ('/comic/:id', {
    	controller: 'ComicController',
    	templateUrl: 'views/comic.html'
  	})
    .otherwise({ 
      redirectTo: '/' 
    }); 
});