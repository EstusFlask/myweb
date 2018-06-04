angular
.module('webApp',['ngRoute','cabeceraApp','homeApp'])
.controller('mainCtrl', function($scope){})
.constant('vistaext','view.html')
.config(function($routeProvider,$locationProvider,vistaext){
	$locationProvider.hashPrefix('');
	$routeProvider
		.when('/home',{
			templateUrl: 'views/home.' + vistaext,
			controller: 'homeCtrl'
		})
		.when('/about',{
			templateUrl: 'views/about.' + vistaext,
			controller:'aboutCtrl'
		})
		.when('/tecnologias',{
			templateUrl: 'views/tecnologias.' + vistaext
		})
		.when('/contacto',{
			templateUrl:'views/perfil.'+ vistaext,
			controller:'contactoCtrl'
		})
		.otherwise({
			redirectTo:'/home'
		});
});