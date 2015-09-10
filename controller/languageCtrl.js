angular.module('myApp').controller('languageCtrl', ['$scope','nlsService', function($scope, nlsService){

// default for now: may change with introduction of cookies
$scope.languageSelected = "EN";

$scope.Location;

var updateStrings = function() {
		$scope.Location = nlsService.getString('Location');
};

$scope.amISelectedLanguage = function(language){
	return $scope.languageSelected === language;
}

nlsService.subscribe(updateStrings);

// relay to nlsService
$scope.changeLanguage = function(language){
	nlsService.changeLanguage(language);
	$scope.languageSelected = language;
}



}]);