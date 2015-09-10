angular.module('myApp').controller('projectCtrl', ['$scope','nlsService', function($scope, nlsService){
	// nls
	$scope.ProjectTitle;
	$scope.PacMan;
	$scope.PacManDescription;
	$scope.GoTA;
	$scope.GoTADescriptionP1;
	$scope.GoTAWiki;
	$scope.GoTADescriptionP2;
	$scope.MIPS;
	$scope.MIPSDescription;
		
	 var updateStrings = function() {
	 	$scope.ProjectTitle = nlsService.getString('ProjectTitle');
		$scope.PacMan = nlsService.getString('PacMan');
		$scope.PacManDescription = nlsService.getString('PacManDescription');
		$scope.GoTA = nlsService.getString('GoTA');
		$scope.GoTADescriptionP1 = nlsService.getString('GoTADescriptionP1');
		$scope.GoTAWiki = nlsService.getString('GoTAWiki');
		$scope.GoTADescriptionP2 = nlsService.getString('GoTADescriptionP2');
		$scope.MIPS = nlsService.getString('MIPS');
		$scope.MIPSDescription = nlsService.getString('MIPSDescription');
	};
	nlsService.subscribe(updateStrings);
	
		$scope.isActive = function(route) {
				 return route === $location.path();
	 }
}]); 