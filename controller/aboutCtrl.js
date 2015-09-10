angular.module('myApp').controller('aboutCtrl', ['$scope','nlsService', function($scope, nlsService){
	// nls
	$scope.AboutHeader;
	$scope.Greeting;
	$scope.FirstFact;
	$scope.SecondFact;
	$scope.ThirdFact;
	$scope.FourthFact;
	$scope.ClickConnect;
		
	 var updateStrings = function() {
		$scope.AboutHeader = nlsService.getString('AboutHeader');
		$scope.Greeting = nlsService.getString('Greeting');
		$scope.FirstFact = nlsService.getString('FirstFact');
		$scope.SecondFact = nlsService.getString('SecondFact');
		$scope.ThirdFact = nlsService.getString('ThirdFact');
		$scope.FourthFact = nlsService.getString('FourthFact');
		$scope.ClickConnect = nlsService.getString('ClickConnect');
	};
	nlsService.subscribe(updateStrings);
	
		$scope.isActive = function(route) {
				 return route === $location.path();
	 }
}]); 