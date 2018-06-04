angular
.module('cabeceraApp',[])
.controller('cabeceraCtrl', function($scope,$http){
	$scope.flagLogo = true;
	var myLogoSize = function(){
		if ($scope.flagLogo==true) {
			$('#mylogo').animate({ width: '35px'},'slow');
					$scope.flagLogo=false;}
		else {
			$('#mylogo').animate({width: '50px'},'slow');
					$scope.flagLogo=true;}
	}
		
	$scope.colapsa = function(){
        $('.animated-icon1').toggleClass('open');
        myLogoSize();}
}).component('cabecera',{
	templateUrl:'views/cabecera.view.html',
	controller:'cabeceraCtrl'
});