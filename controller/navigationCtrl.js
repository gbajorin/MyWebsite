angular.module('myApp').controller('navigationCtrl', ['$scope', '$window', '$location', 'nlsService', 'utilitieService', function($scope, $window, $location, nlsService, utilitieService) {
    
  $scope.About;
  $scope.Project;
  $scope.Connect;
  
  $scope.navigationStyle;
  var navSizeLarge = true;
  
  var smallNavigation = {
    "padding-top": "15px",
    "padding-bottom": "20px"
  };
  
  var largeNavigation = {
    "padding-top": "35px",
    "padding-bottom": "16px"
  };
  
  var isIEMobile = utilitieService.isIE() && utilitieService.isMobile();
  
   var updateStrings = function() {
    $scope.About = nlsService.getString('About');
    $scope.Projects = nlsService.getString('Projects');
    $scope.Connect = nlsService.getString('Connect');
  };
  nlsService.subscribe(updateStrings);
    
  $scope.isActive = function(route) {
     return route === $location.path();
  }
  
  window.onscroll = function () {
       if ($window.pageYOffset <= 7 && !navSizeLarge) {
      navSizeLarge = true; 
      $scope.navigationStyle = largeNavigation;
      $scope.$apply();
    } else if($window.pageYOffset > 7 && navSizeLarge) {
      navSizeLarge = false;
      $scope.navigationStyle = smallNavigation;
      $scope.$apply();
    }
   };
   
   
   
   $scope.$on('$destroy', function() {
    window.onscroll = null;
  });
  
}]);