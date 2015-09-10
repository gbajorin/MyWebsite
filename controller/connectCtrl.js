angular.module('myApp').controller('connectCtrl', ['$scope', '$timeout', 'nlsService', function($scope, $timeout, nlsService){

  var focusCss = {
    "color": "#767992",
    "border-bottom-style": "dotted",
    "outline": "none",
    "margin": "0px",
    "padding-bottom": "2px",
    "line-height": "140%",
    "display": "inline-block",
    };  
  

  // div states
  $scope.emailDiv = true;
  $scope.responseDiv = false;

  // email entries;
  $scope.Name = "Joe Smith";
  $scope.Email = "Joe.Smith@email.com";
  $scope.Message;
  $scope.Response = "";
  
  // css style changes
  $scope.NameStyle = {};
  $scope.EmailStyle = {};
  $scope.MessageStyle = {};
  
  // nls
  $scope.ConnectHeader;
  $scope.LetterGreeting;
  $scope.SlimShady;
  $scope.ToEmail;
  $scope.ToMessage;
  $scope.Sincerely;
  $scope.NewFriend;
  $scope.ClickSend;
  $scope.ResponseValid;
  $scope.ResponseInvalid;
  
  var changeMessageLanguage = function() {
    if($('#messageSpan').text() === $scope.Message)
      $('#messageSpan')[0].textContent = nlsService.getString('Message');
  }
  
   var updateStrings = function() {
    changeMessageLanguage();
    $scope.ConnectHeader = nlsService.getString('ConnectHeader');
    $scope.LetterGreeting = nlsService.getString('LetterGreeting');  
    $scope.SlimShady = nlsService.getString('SlimShady');
    $scope.ToEmail = nlsService.getString('ToEmail');
    $scope.ToMessage = nlsService.getString('ToMessage');
    $scope.Message = nlsService.getString('Message');
    $scope.Sincerely = nlsService.getString('Sincerely');
    $scope.NewFriend = nlsService.getString('NewFriend');
    $scope.ClickSend = nlsService.getString('ClickSend');
    $scope.ResponseValid = nlsService.getString('ResponseValid');
    $scope.ResponseInvalid = nlsService.getString('ResponseInvalid');
  };
  nlsService.subscribe(updateStrings);
  
    $scope.isActive = function(route) {
         return route === $location.path();
   }

  $scope.sendEmail = function(){
    $scope.emailDiv = false;
    $scope.responseDiv = true;
    if(validateEmail())
      $scope.Response = $scope.ResponseValid;
    else
      $scope.Response = $scope.ResponseInvalid;
    $timeout(function(){
      $scope.responseDiv = false;
      $scope.emailDiv = true;
    },2000);
  }

  var validateEmail = function(){
    var re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if(re.test($('#emailSpan').text())){
      return true;
    } else {
      $scope.EmailStyle = { "color": "#FF2C3C" };
      return false;
    }
  }
  
  $scope.nameFocus = function(){
    if($('#nameSpan').text() === $scope.Name)
      $('#nameSpan')[0].textContent = "";
    $scope.NameStyle = focusCss; 
    }
    
  $scope.nameBlur = function(){
    if($('#nameSpan').text() === "" || $('#nameSpan').text() === $scope.Name){
      $('#nameSpan')[0].textContent = $scope.Name;
      $scope.NameStyle = {"color": "#CCD0D0" };
     } else {
        $scope.NameStyle = { "color":"#767992" };
      }
  }
    
  $scope.emailFocus = function(){
    if($('#emailSpan').text() === $scope.Email)
      $('#emailSpan')[0].textContent = "";
    $scope.EmailStyle = focusCss;
  }
  
  $scope.emailBlur = function(){
    if($('#emailSpan').text() === "" || $('#emailSpan').text() === $scope.Email){
      $('#emailSpan')[0].textContent = $scope.Email;
      $scope.EmailStyle = {"color": "#CCD0D0" };
    } else {
      $scope.EmailStyle = { "color":"#767992" };
      }
    validateEmail();
  }
  
  $scope.messageFocus = function(){
    if($('#messageSpan').text() === $scope.Message)
      $('#messageSpan')[0].textContent = "";
    $scope.MessageStyle = focusCss;
  }
  
  $scope.messageBlur = function(){
    if($('#messageSpan').text() === "" || $('#messageSpan').text() === $scope.Message){
      $('#messageSpan')[0].textContent = $scope.Message;
      $scope.MessageStyle = {"color": "#CCD0D0" };
    } else {
      $scope.MessageStyle = { "color":"#767992" };
      }
  }
  

}]); 